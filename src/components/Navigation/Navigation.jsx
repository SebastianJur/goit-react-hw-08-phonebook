import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Tooltip from '@mui/material/Tooltip';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <nav>
      <Link component={NavLink} to="/">
        <Tooltip title="Home" placement="bottom" arrow>
          <IconButton>
            <HomeIcon  />
          </IconButton>
        </Tooltip>
      </Link>
      {isLoggedIn && (
        <Link component={NavLink} to="/contacts">
          <Tooltip title="Contacts" placement="bottom" arrow>
            <IconButton>
              <ImportContactsIcon />
            </IconButton>
          </Tooltip>
        </Link>
      )}
    </nav>
  );
};