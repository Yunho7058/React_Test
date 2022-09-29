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

const Button = ({
  name,
  handle,
}: {
  name: string;
  handle: (route: string) => void;
}) => {
  return (
    <Back
      onClick={() => {
        handle(`${name}`);
      }}
    >
      {name}
    </Back>
  );
};

export default Button;
