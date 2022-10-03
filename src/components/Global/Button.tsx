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
  font-size: 17px;
  &:hover {
    background-color: #3287ff;
  }
  &.빼기 {
    background-color: #e074a8;
    &:hover {
      background-color: #ee4a99;
    }
  }
`;

const Button = memo(
  ({
    name,
    handle,
    id,
  }: {
    name: string;
    handle: ({ name, id }: { name?: string; id?: number }) => void;
    id?: number;
  }) => {
    return (
      <Back
        onClick={() => {
          handle({ name, id });
        }}
        className={name}
      >
        {name}
      </Back>
    );
  }
);

export default Button;
