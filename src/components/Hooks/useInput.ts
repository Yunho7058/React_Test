import { ChangeEvent, useCallback, useState } from 'react';
// type TypeForm = {
//   id: string;
//   email: string;
//   password: string;
// };

type ReturnTypes = [
  any,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
];

const useInput = (initialState: any): ReturnTypes => {
  const [form, setForm] = useState(initialState);
  const handleOnchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: any) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialState), [initialState]);
  return [form, handleOnchange, reset];
};

export default useInput;
