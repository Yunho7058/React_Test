import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, RootState } from '../../redux/store';

const useHooks = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);
  return { dispatch, navigate, state };
};

export default useHooks;
