import { useDispatch } from 'react-redux';
import { open, close } from '../redux/features/modalSlice';

export function useModal() {
  const dispatch = useDispatch();

  const openModal = (post) => {
    dispatch(open(post));
  };

  const closeModal = () => {
    dispatch(close());
  };

  return { openModal, closeModal };
}
