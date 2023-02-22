import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export const Notification = ({ message }) => (
  <Typography variant="h6" style={{ textAlign: 'center' }}>
    {message}
  </Typography>
);

Notification.propTypes = {
  message: PropTypes.string,
};
