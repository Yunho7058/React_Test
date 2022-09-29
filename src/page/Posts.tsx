import styled from 'styled-components';
import Button from '../components/Global/Button';
import InputCreate from '../components/InputCreate';
import ItemList from '../components/ItemList';
const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = () => {
  const handleCreate = () => {};
  return (
    <Back>
      <InputCreate />
      <Button handle={handleCreate} name="등록" />
      <ItemList />
    </Back>
  );
};

export default Posts;
