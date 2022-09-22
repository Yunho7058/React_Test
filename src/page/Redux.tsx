import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TypeItem, addCount, removeCount } from '../redux/slice/item';
import { TypePostsData, asyncThunk } from '../redux/slice/thunkTest';
import { AppDispatch, RootState } from '../redux/store';

export const test123 = '5';

function ReduxTest() {
  const itemState = useSelector<RootState, TypeItem[]>((state) => state.items);
  const postState = useSelector<RootState, TypePostsData>(
    (state) => state.thunkTest
  );
  const dispatch: AppDispatch = useDispatch();
  console.log(itemState, 'dd');
  return (
    <Back>
      <div>
        <div>결과: {postState.status}</div>
        <button
          onClick={() => {
            dispatch(asyncThunk()).then((res) => {});
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
      <Box>
        <TrBox>
          <TdBox>번호</TdBox>
          <TdBox>상품명</TdBox>
          <TdBox>수량</TdBox>
          <TdBox>기능</TdBox>
        </TrBox>
        {itemState.map((el) => {
          return (
            <TrBox key={el.id}>
              <TdBox>{el.id}</TdBox>
              <TdBox>{el.name}</TdBox>
              <TdBox>{el.count}</TdBox>
              <TdBox>
                <button
                  onClick={() => {
                    dispatch(addCount(el.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(removeCount(el.id));
                  }}
                >
                  -
                </button>
              </TdBox>
            </TrBox>
          );
        })}
      </Box>
    </Back>
  );
}

export default ReduxTest;
const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 60%;
  padding: 5px;
  height: 60%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const TrBox = styled.div`
  padding: 5px;
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TdBox = styled.div`
  width: 100%;
  padding: 5px;
  height: 30%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;
