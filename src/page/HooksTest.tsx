// https://leego.tistory.com/entry/React-Custom-hook%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%A0%84%EC%97%90-%EA%B3%A0%EB%A0%A4%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83%EB%93%A4
import styled from 'styled-components';
import useInput from '../components/Hooks/useInput';

const Box = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  row-gap: 10px;
`;

const HooksTest = () => {
  const [form, handleOnchange, reset]: any = useInput({
    id: '',
    email: '',
    password: '',
  });
  const handleClick = () => {
    console.log(form);
  };

  return (
    <Box>
      이메일
      <input
        type="email"
        name="email"
        defaultValue={form.email}
        onChange={handleOnchange}
      />
      아이디
      <input
        type="text"
        name="id"
        defaultValue={form.id}
        onChange={handleOnchange}
      />
      비밀번호
      <input
        type="password"
        name="password"
        defaultValue={form.password}
        onChange={handleOnchange}
      />
      <button onClick={handleClick}>클릭하기</button>
      <div>
        {form.id} /{form.email} /{form.password}
      </div>
    </Box>
  );
};

export default HooksTest;
