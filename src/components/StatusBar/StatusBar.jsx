import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/contacts/selectors';
import {
  sortContactsAz,
  sortContactsAzReverse,
} from '../../redux/contacts/contactsSlice';
import { Filter } from '../Filter/Filter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Tooltip from '@mui/material/Tooltip';
import css from './StatusBar.module.scss';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({
    sortedAlphabetically: false,
    sortedByDate: false,
  });
  const dispatch = useDispatch();
  const total = useSelector(selectContactsCount);

  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

  return (
    <Box className={css.StatusBar}>
      <Tooltip title="Number of your contacts" placement="bottom-start" arrow>
        <Box className={css.counter}>
          <PersonIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {total}
          </Typography>
        </Box>
      </Tooltip>
      <Filter />

      <Tooltip
        title={
          sorted.sortedAlphabetically ? 'Sort by name Z-A' : 'Sort by name A-Z'
        }
        placement="bottom-start"
        arrow
      >
        <span>
          <IconButton onClick={handleSortAzContacts} disabled={total < 2}>
            <SortByAlphaIcon size="large" className={css.sortIcon} />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};
