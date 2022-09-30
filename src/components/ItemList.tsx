import { memo, useMemo, useState } from 'react';
import { useMatch } from 'react-router';
import styled from 'styled-components';
import { removeItem } from '../redux/slice/item';
import Button from './Global/Button';
import useHooks from './Hooks/useHooks';

const Back = styled.section`
  width: 130%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const Box = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
const Content = styled.div`
  width: 50%;
  font-size: 16px;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

const ItemList = memo(() => {
  const { state, dispatch } = useHooks();
  const itemState = state.items.dumyData;
  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  const itemCountZero = () => {
    console.log('품절수량');
    return itemState.filter((el) => Number(el.count) === 0).length;
  };
  const zeroCount = useMemo(() => itemCountZero(), [itemState]);
  // useMomo 함수를 만들어 품절된 수량 확인하는 함수 만들기
  const [testInput, setTestInput] = useState('');
  const handelTest = (e: any) => {
    setTestInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Back>
      <input type="text" defaultValue={testInput} onChange={handelTest}></input>
      {itemState.map((el) => (
        <Box key={el.id}>
          <Content>{el.name}</Content>
          <Content>{el.count}</Content>
          <Button handle={handleRemove} name="삭제" id={el.id} />
        </Box>
      ))}
      <div>품절된 수량 : {zeroCount}</div>
      <div>총 수량 : {itemState.length}</div>
    </Back>
  );
});

export default ItemList;
