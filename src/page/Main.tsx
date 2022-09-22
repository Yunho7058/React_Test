import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Back = styled.div`
  width: 100vw;
  height: 100hw;
`;

const Btn = styled.button``;

const Main = () => {
  const navigate = useNavigate();

  return (
    <Back>
      <Btn onClick={() => navigate('/map')}>카카오 지도</Btn>
      <Btn onClick={() => navigate('/reduxTest')}>Redux-Toolkit 연습</Btn>
      <Btn onClick={() => navigate('/hooksTest')}>Hook 만들기 연습</Btn>
    </Back>
  );
};

export default Main;
