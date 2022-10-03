import { createSlice } from '@reduxjs/toolkit';
import TypeList from '../../components/Global/typeList';
import { dumyItems } from '../../components/dumyItem';
let initialState: {
  dumyItems: TypeList.TypeItem[];
  itemInput: TypeList.TypeItem;
} = {
  dumyItems,
  itemInput: { id: 0, name: '', count: 0 },
};

//state 만들기
export const item = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCount(state, action) {
      state.dumyItems[action.payload - 1].count++;
    },
    removeCount(state, action) {
      state.dumyItems[action.payload - 1].count > 0 &&
        state.dumyItems[action.payload - 1].count--;
    },
    addItem(state, action) {
      const id = state.dumyItems[state.dumyItems.length - 1].id + 1;
      const { name, count } = action.payload;
      state.dumyItems.push({ id, name, count });
    },
    removeItem(state, action) {
      const id = action.payload;
      state.dumyItems = state.dumyItems.filter((el) => el.id !== id);
    },
    // addInputItem(state, action) {
    //   const { name, count } = action.payload;
    //   state.itemInput.name = name;
    //   state.itemInput.count = count;
    // },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { addCount, removeCount, addItem, removeItem } = item.actions;
export default item.reducer;
