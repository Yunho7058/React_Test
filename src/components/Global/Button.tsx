import { memo } from 'react';
import styled from 'styled-components';
const Back = styled.button`
  all: unset;
  color: white;
  background-color: #32b8ff;
  border-radius: 10px;
  cursor: pointer;
  width: 80%;
  text-align: center;
  height: 30px;
  margin-top: 10px;
  &:hover {
    background-color: #3287ff;
  }
`;

const Button = memo(
  ({
    name,
    handle,
    id,
  }: {
    name: string;
    handle: (x: any) => void;
    id?: number;
  }) => {
    return (
      <Back
        onClick={() => {
          handle(id ? id : name);
        }}
      >
        {name}
      </Back>
    );
  }
);

export default Button;
