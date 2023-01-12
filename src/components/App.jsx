import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return (
      contacts ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  //   componentDidMount() {
  //     const contactList = localStorage.getItem('contacts');
  //     const parsedContactList = JSON.parse(contactList);
  //     if (parsedContactList) {
  //       this.setState({ contacts: parsedContactList });
  //     }
  //   };

  //   componentDidUpdate(_,prevState) {
  // if (this.state.contacts !== prevState.contacts) {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }
  //   };

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const makeNewUser = obj => {
    if (
      contacts.some(user => user.name.toLowerCase() === obj.name.toLowerCase())
    ) {
      return alert(`${obj.name} is already in contact list`);
    }

    setContacts((prevState) => {
      return [...prevState, obj];
    });
  };

  const deleteUser = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getUser = () => {
    const filteredUser = filter.toLowerCase().trim();
    return contacts.filter(user =>
      user.name.toLowerCase().trim().includes(filteredUser)
    );
  };

  const findUser = getUser();
  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm makeNewUser={makeNewUser} />

      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList contacts={findUser} onDeleteUser={deleteUser} />
    </div>
  );
};
