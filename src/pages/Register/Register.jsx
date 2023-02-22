import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { register } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Notification } from 'components/Notification/Notification';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import css from './Register.module.scss';

const Register = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Registration
        </Typography>
        <TextField
          label="Name"
          variant="standard"
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Enter your name"
          fullWidth
          margin="normal"
        />
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
          color="primary"
          size="large"
          endIcon={<AppRegistrationIcon />}
          className={css.submitButton}
        >
          Sign up
        </Button>
      </form>

      {error?.response?.data?.errors?.password?.message && (
        <Notification message="Try another password." />
      )}
      {error?.response?.data?.name && (
        <Notification message={'Try another e-mail.'} />
      )}
    </>
  );
};

export default Register;