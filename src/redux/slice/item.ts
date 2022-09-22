import { createSlice, current } from '@reduxjs/toolkit';

export interface TypeItem {
  id: number;
  name: string;
  count: number;
}

let dumy: TypeItem[] = [
  { id: 1, name: '아이폰', count: 1 },
  { id: 2, name: '갤럭시', count: 3 },
  { id: 3, name: 'LG', count: 5 },
];

//state 만들기
export const item = createSlice({
  name: 'users',
  initialState: dumy,
  reducers: {
    addCount(state, action) {
      console.log(current(state));
      console.log(action);
      state[action.payload - 1].count++;
    },
    removeCount(state, action) {
      state[action.payload - 1].count > 0 && state[action.payload - 1].count--;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { addCount, removeCount } = item.actions;
export default item.reducer;
