import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface TypePostsData {
  status: string;
  post: {
    title: string;
    id: number;
    nickname: string;
    updated_at: any;
    like_count: number;
    bucketlist: {
      id: number;
      content: string;
      detail?: string;
      image_path?: string | null;
      image_path_origin?: string | null;
    }[];
  }[];
}

export interface TypePosts {
  title: string;
  id: number;
  nickname: string;
  updated_at: any;
  like_count: number;
  bucketlist: {
    id: number;
    content: string;
    detail?: string;
    image_path?: string | null;
    image_path_origin?: string | null;
  }[];
}

const asyncThunk = createAsyncThunk(
  //타입과 명칭
  'itemsSlice/asyncThunk',
  async (id: string) => {
    console.log('데이타 보낼때 인자로 담기', id);
    const post = await axios.get('https://mylifebucketlist.shop/api/post', {
      headers: { 'Content-Type': 'application/json' },
    });
    return post.data as TypePosts[];
    //! 해결 방법 type 2개로 나눠서 관리 server로 받은 데이타도 나눠서 리턴함
  }
);

//state 만들기
export const thunkTest = createSlice({
  name: 'thunk',
  initialState: { status: '', post: [] } as TypePostsData,
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
      state.status = 'complete';
      if (!state.post.length) {
        state.post.push(...action.payload);
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
