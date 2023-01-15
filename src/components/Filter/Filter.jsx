import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/contactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilterInput = e => {
    dispatch(getFilterValue(e.target.value));
  };

  return (
    <>
      <label className={css.label} htmlFor="">
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFilterInput}
          value={filter}
        />
      </label>
    </>
  );
};
