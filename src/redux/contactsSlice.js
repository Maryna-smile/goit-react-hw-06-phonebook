import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
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

      state.contacts.push(action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
