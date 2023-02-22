import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Notification } from 'components/Notification/Notification';
import css from './Login.module.scss';

const Login = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="standard"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          endIcon={<LoginIcon />}
          className={css.submitButton}
        >
          Login
        </Button>
      </form>

      {error && <Notification message="Wrong login or password." />}
    </>
  );
};

export default Login;