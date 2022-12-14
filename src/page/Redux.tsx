import styled from 'styled-components';
import Button from '../components/Global/Button';
import useHooks from '../components/Hooks/useHooks';
import { addCount, removeCount } from '../redux/slice/item';
import { asyncThunk } from '../redux/slice/thunkTest';

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

const ReduxTest = () => {
  const { dispatch, state } = useHooks();
  const itemState = state.items.dumyItems;
  const postState = state.thunkTest;

  const handleCounterClick = ({ name, id }: { name?: string; id?: number }) => {
    name === '추가' ? dispatch(addCount(id)) : dispatch(removeCount(id));
  };

  return (
    <List>
      <Title>
        <div>아이디</div>
        <div>상품명</div>
        <div>수량</div>
      </Title>
      {itemState.map((el) => (
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

      <div>
        <div>결과: {postState.status}</div>
        <button
          onClick={() => {
            dispatch(asyncThunk('id:3'));
          }}
        >
          요청보내기
        </button>
        {postState.status === 'complete' ? (
          <div>
            {postState.post.map((el) => {
              return <div key={el.id}>{el.nickname}</div>;
            })}
          </div>
        ) : null}
      </div>
    </List>
  );
};

export default ReduxTest;
