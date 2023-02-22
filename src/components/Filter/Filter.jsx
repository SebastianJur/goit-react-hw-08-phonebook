import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box className={css.filter}>
      <Input
        placeholder="Filter"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length < 2}
        className={css.input}
      />
    </Box>
  );
};