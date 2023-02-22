import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleNameChange = newName => {
    setName(newName);
  };

  const handlePhoneChange = newPhone => {
    setPhone(newPhone);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isPhoneExist = contacts.find(
      contact =>
        contact.number.replace(/[^0-9]+/g, '') === phone.replace(/[^0-9]+/g, '')
    );
    if (isContactExist) {
      alert(`User ${name} is already in contacts`);
      return;
    }
    if (isPhoneExist) {
      alert(`Number ${phone} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        number: phone,
      })
    );

    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        fullWidth
        placeholder="Enter name"
        required
        value={name}
        inputProps={{ maxLength: 30 }}
        onChange={event => handleNameChange(event.target.value)}
      />

      <MuiTelInput
        label="Phone"
        variant="standard"
        name="number"
        fullWidth
        placeholder="Enter phone number"
        required
        value={phone}
        inputProps={{ maxLength: 20 }}
        onChange={handlePhoneChange}
        error={phone.length > 0 && matchIsValidTel(phone) === false}
        margin="normal"
      />

      <Button
        variant="contained"
        className={css.submitButton}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};