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


/*
       );
      })
      .catch((err) => {
        console.log(err, 'bookmark get err');
      });
  }, []);
  const [nicknameChange, setNicknameChange] = useState({
    is: false,
    isNickNameCheck: false,
    nickname: '',
  });
  const handleNicknameInput =
    (key: string) => (e: { target: HTMLInputElement }) => {
      setNicknameChange({ ...nicknameChange, [key]: e.target.value });
    };
  const handleNicknameEdit = () => {
    if (nicknameChange.nickname.length < 1) {
      dispatch(modalOpen('닉네임을 입력해주세요.'));
    } else {
      axiosInstance
        .post(`/nickname`, {
          nickname: nicknameChange.nickname,
        })
        .then((res) => {
          setNicknameChange({ ...nicknameChange, isNickNameCheck: true });
        })
        .catch((err) => {

*/
