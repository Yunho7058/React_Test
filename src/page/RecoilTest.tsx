import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Button from '../components/Global/Button';
import { todoItems } from '../recoil/todo';

const List = styled.section`
  padding: 10px;
`;

const Box = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
  }
`;
const Title = styled.title`
  padding: 10px;

  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  div {
    text-align: center;
  }
`;

const RecoilTest = () => {
  const [items, setitems] = useRecoilState(todoItems);
  const handleCounterClick = ({ name, id }: { name?: string; id?: number }) => {
    const PM = name === '추가' ? 1 : -1;
    const data = items.map((el) =>
      el.id === id ? { ...el, count: el.count + PM } : { ...el }
    );
    setitems(data);
  };

  return (
    <List>
      <Title>
        <div>아이디</div>
        <div>상품명</div>
        <div>수량</div>
      </Title>
      {items.map((el) => (
        <Box key={el.id}>
          <div>{el.id}</div>
          <div>{el.name}</div>
          <div>{el.count}</div>
          <div>
            <Button name="추가" handle={handleCounterClick} id={el.id} />
            <Button name="빼기" handle={handleCounterClick} id={el.id} />
          </div>
        </Box>
      ))}
    </List>
  );
};

export default RecoilTest;
