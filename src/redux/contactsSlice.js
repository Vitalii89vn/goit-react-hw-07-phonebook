import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const contactInitialState = {contacts: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push({
        id: nanoid(10),
        name: action.payload.name,
        number: action.payload.number,
      })
    },
    
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);
export const { addContacts, deleteContact } = contactSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;

