import { atom } from 'recoil';
import { dumyItems } from '../components/dumyItem';
import TypeList from '../components/Global/typeList';

export const todoItems = atom<TypeList.TypeItem[]>({
  key: 'todoItem',
  default: dumyItems,
});
