import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Global/Button';
import useHooks from '../components/Hooks/useHooks';
import InputCreate from '../components/InputCreate';
import ItemList from '../components/ItemList';
import { addItem } from '../redux/slice/item';
const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = () => {
  const { state, dispatch } = useHooks();
  const [inputValue, setInputValue] = useState({ name: '', count: '' });
  const handleCreate = () => {
    dispatch(addItem({ name: inputValue.name, count: inputValue.count }));
  };
  return (
    <Back>
      <InputCreate inputValue={inputValue} setInputValue={setInputValue} />
      <Button handle={handleCreate} name="등록" />
      <ItemList />
    </Back>
  );
};

export default Posts;
