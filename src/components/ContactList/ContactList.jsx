import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContact} from '../../redux/contactsSlice';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(el => el.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button className={css.button} onClick={() => dispatch(deleteContact({id}))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};


