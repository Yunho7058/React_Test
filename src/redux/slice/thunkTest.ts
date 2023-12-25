import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import TypeList from '../../components/Global/typeList';

const initialState: TypeList.TypePostAPI = {
  status: '',
  data: [],
};

const asyncThunk = createAsyncThunk(
  //타입과 명칭
  'itemsSlice/asyncThunk',
  async (id: string) => {
    if (id === '') {
      return null;
    } else {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return post.data;
    }
    //! 해결 방법 type 2개로 나눠서 관리 server로 받은 데이타도 나눠서 리턴함
  }
);

//state 만들기
export const thunkTest = createSlice({
  name: 'thunk',
  initialState,
  reducers: {
    //동기 작업
  },
  extraReducers: (builder) => {
    //요청 전
    builder.addCase(asyncThunk.pending, (state, action) => {
      state.status = 'Loading';
    });
    //요청 성공
    builder.addCase(asyncThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.data = [action.payload];
        state.status = 'complete';
      } else {
        state.status = 'client fail';
      }
    });
    //요청 실패
    builder.addCase(asyncThunk.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

export default thunkTest.reducer;
export { asyncThunk };
