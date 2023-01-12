import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleFilter, value }) => {
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
          onChange={handleFilter}
          value={value}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
  value: PropTypes.string,
};
