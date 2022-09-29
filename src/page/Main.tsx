import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Button from '../components/Global/Button';
const Back = styled.div`
  width: 100vw;
  height: 100hw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  const navigate = useNavigate();
  const handlePageMove = (route: string) => {
    navigate(`/${route}`);
  };
  return (
    <Back>
      <Button handle={handlePageMove} name="map" />
      <Button handle={handlePageMove} name="reduxTest" />
      <Button handle={handlePageMove} name="hooksTest" />
      <Button handle={handlePageMove} name="posts" />
    </Back>
  );
};

export default Main;
