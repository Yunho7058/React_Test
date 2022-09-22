import { ChangeEvent, useCallback, useEffect, useState } from 'react';
//https://velog.io/@wiostz98kr/React-%EC%BB%A4%EC%8A%A4%ED%85%80-Hooks-%EB%A7%8C%EB%93%A4%EA%B8%B0
const useInput = (initialState: {
  id: string;
  email: string;
  password: string;
}) => {
  const [form, setForm] = useState(initialState);

  const handleOnchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, form);
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialState), [initialState]);
  return [form, handleOnchange, reset];
};

export default useInput;
