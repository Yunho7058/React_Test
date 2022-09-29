import styled from 'styled-components';
import useHooks from './Hooks/useHooks';
const Back = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 5px;
`;
const Input = styled.input``;

const InputCreate = () => {
  const { state, dispatch } = useHooks();

  return (
    <Back>
      <Input type="text" placeholder="상품" />
      <Input type="number" placeholder="수량" />
    </Back>
  );
};

export default InputCreate;
