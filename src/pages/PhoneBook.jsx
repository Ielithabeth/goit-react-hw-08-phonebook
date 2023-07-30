import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

const  PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm/>

      <div>
        <h2>Contacts</h2>
        {selectContacts().length 
        ? (<p>Your phonebook is empty. Add your first contact</p>) 
        : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </div>
    </section>
  );
}

export default PhoneBook;