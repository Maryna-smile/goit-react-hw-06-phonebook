import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          user => user.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contact list`);
      }

      state.contacts.push(
       action.payload
      );
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
           },


    getFilterValue(state, action) {
      state.filter = action.payload
      // state.contacts.filter(contact => contact.name.toLowerCase().trim().includes(action.payload.name.toLowerCase().trim()))
    },
  },
});

export const { addContact, deleteContact, getFilterValue } =
  contactsSlice.actions;
export default contactsSlice.reducer;
