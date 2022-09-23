import { ChangeEvent, useCallback, useState } from 'react';
type TypeForm = {
  id: string;
  email: string;
  password: string;
};

type ReturnTypes = [
  TypeForm,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
];

const useInput = (initialState: TypeForm): ReturnTypes => {
  const [form, setForm] = useState(initialState);
  const handleOnchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialState), [initialState]);
  return [form, handleOnchange, reset];
};

export default useInput;
