import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactList, postContacts, removeContact } from '../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async search => {
    const contacts = await fetchContactList(search);
    return contacts.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async data => {
    const contact = await postContacts(data);
    return contact;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const contact = await removeContact(contactId);
    return contact.contactId;
  }
);