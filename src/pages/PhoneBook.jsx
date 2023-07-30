import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

const  PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm/>

        <div>
          <h2>Contacts</h2>
          
          <Filter />
          <ContactsList />
        </div>
    </>
  );
}

export default PhoneBook;