import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ makeNewUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const OnNameChange = e => {
    setName(e.target.value);
  };

  const OnNumberChange = e => {
    setNumber(e.target.value);
  };

  const makeObjNewUser = e => {
    e.preventDefault();
    const newUser = {
    name,
    number,
    id: nanoid()
    };

  makeNewUser(newUser);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={makeObjNewUser}>
        <label className={css.label} htmlFor="">
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={OnNameChange}
            value={name}
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={OnNumberChange}
            value={number}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  makeNewUser: PropTypes.func,
};

