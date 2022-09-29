import styled from 'styled-components';
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

const ItemList = () => {
  const itemState = useHooks().state.items.dumyData;
  const handleRemove = () => {};
  const count = 2;
  // useMomo 함수를 만들어 품절된 수량 확인하는 함수 만들기
  return (
    <Back>
      {itemState.map((el) => (
        <Box key={el.id}>
          <Content>{el.name}</Content>
          <Content>{el.count}</Content>
          <Button handle={handleRemove} name="삭제" />
        </Box>
      ))}
      <div>품절된 수량 : {count}</div>
    </Back>
  );
};

export default ItemList;
