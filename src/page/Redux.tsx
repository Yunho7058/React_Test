import styled from 'styled-components';
import Button from '../components/Global/Button';
import useHooks from '../components/Hooks/useHooks';
import useInput from '../components/Hooks/useInput';
import { addCount, removeCount } from '../redux/slice/item';
import { asyncThunk } from '../redux/slice/thunkTest';

const List = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [form, handleOnchange] = useInput({
    id: '',
  });
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
      <div>AsyncThunk Test</div>
      <div>결과: {postState.status}</div>
      <input
        type="number"
        value={form.id}
        onChange={handleOnchange}
        name="id"
        maxLength={3}
      />
      <button
        onClick={() => {
          dispatch(asyncThunk(form.id));
        }}
      >
        요청보내기
      </button>
      {postState.status === 'complete' ? (
        <div>
          <div>아이디 : {postState.data[0].id}</div>
          <div>제목 : {postState.data[0].title}</div>
          <div>내용 : {postState.data[0].body}</div>
          <div>유저 : {postState.data[0].userId}</div>
        </div>
      ) : postState.status === 'Loading' ? (
        <div>로딩중</div>
      ) : null}
    </List>
  );
};

export default ReduxTest;
