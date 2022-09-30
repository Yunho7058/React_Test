import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import useHooks from './Hooks/useHooks';
const Back = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 5px;
`;
const Input = styled.input``;

const InputCreate = ({
  inputValue,
  setInputValue,
}: {
  inputValue: { name: string; count: string };
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      name: string;
      count: string;
    }>
  >;
}) => {
  const handleInput = (key: string) => (e: { target: HTMLInputElement }) => {
    let { value } = e.target;
    key === 'count' && Number(value) > 999 && (value = '999');
    key === 'count' && Number(value) < 0 && (value = '0');
    setInputValue({ ...inputValue, [key]: value });
  };
  return (
    <Back>
      <Input
        type="text"
        placeholder="상품"
        value={inputValue.name}
        onChange={handleInput('name')}
        maxLength={3}
      />
      <Input
        type="number"
        placeholder="수량"
        value={inputValue.count}
        onChange={handleInput('count')}
      />
    </Back>
  );
};

export default InputCreate;
