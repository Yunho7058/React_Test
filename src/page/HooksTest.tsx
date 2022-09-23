import styled from 'styled-components';
import useInput from '../components/Hooks/useInput';

const Box = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  row-gap: 10px;
`;

const HooksTest = () => {
  const [form, handleOnchange, reset] = useInput({
    id: '',
    email: '',
    password: '',
  });
  const handleClick = () => {
    console.log(form);
    reset();
  };

  return (
    <Box>
      이메일
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleOnchange}
      />
      아이디
      <input type="text" name="id" value={form.id} onChange={handleOnchange} />
      비밀번호
      <input
        type="password"
        name="password"
        value={form.password}
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
