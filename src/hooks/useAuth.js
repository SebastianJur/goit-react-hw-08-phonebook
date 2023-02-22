import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isFetchingCurrentUser,
    user,
  };
};
