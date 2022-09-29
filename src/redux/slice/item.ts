import { createSlice } from '@reduxjs/toolkit';
import TypeList from '../../components/Global/typeList';

let initialState: {
  dumyData: TypeList.TypeItem[];
  itemInput: TypeList.TypeItem;
} = {
  dumyData: [
    { id: 1, name: '아이폰', count: 1 },
    { id: 2, name: '갤럭시', count: 3 },
    { id: 3, name: 'LG', count: 5 },
  ],
  itemInput: { id: 0, name: '', count: 0 },
};

//state 만들기
export const item = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCount(state, action) {
      state.dumyData[action.payload - 1].count++;
    },
    removeCount(state, action) {
      state.dumyData[action.payload - 1].count > 0 &&
        state.dumyData[action.payload - 1].count--;
    },
    addItem(state, action) {
      const id = state.dumyData[state.dumyData.length - 1].id + 1;
      const { name, count } = action.payload;
      state.dumyData.push({ id, name, count });
    },
    removeItem(state, action) {
      const { id } = action.payload;
      state.dumyData.filter((el) => el.id !== id);
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { addCount, removeCount, addItem, removeItem } = item.actions;
export default item.reducer;
