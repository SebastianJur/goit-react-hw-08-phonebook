import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import {
  selectIsLoading,
  selectFilteredContacts,
  selectFilter,
  selectContactsCount,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.scss';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contactsCount = useSelector(selectContactsCount);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List className={css.list}>
      {isLoading && <CircularProgress className={css.loader} />}
      {!isLoading && contactsCount === 0 && (
        <Notification message="No contacts yet" />
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
      {filteredContacts.length === 0 && filter !== '' && (
        <Notification message="No contacts found" />
      )}
    </List>
  );
};
