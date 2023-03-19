import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from './operations'


const contactsInitialState = {
  items: [
    // { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
  ],
  isLoading: false,
  error: null
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

  },
});

export const contactReducer = contactSlice.reducer

// // Selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


