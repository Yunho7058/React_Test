import { configureStore } from '@reduxjs/toolkit';
import items from './slice/item';
import thunkTest from './slice/thunkTest';

//등록
const store = configureStore({
  reducer: {
    items,
    thunkTest,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export default store;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

/*
첫번째 방법 직령화 검사 끄기
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: true,
});
*/
