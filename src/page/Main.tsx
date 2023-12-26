import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Button from '../components/Global/Button';
const Back = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
`;

const Main = () => {
  const navigate = useNavigate();
  const handlePageMove = ({ name }: { name?: string }) => {
    navigate(`/${name}`);
  };

  return (
    <Back>
      <Button handle={handlePageMove} name="map" />
      <Button handle={handlePageMove} name="reduxTest" />
      <Button handle={handlePageMove} name="hooksTest" />
      <Button handle={handlePageMove} name="posts" />
      <Button handle={handlePageMove} name="recoilTest" />
      <Button handle={handlePageMove} name="axiosTest" />
    </Back>
  );
};

export default Main;
