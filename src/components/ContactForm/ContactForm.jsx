import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const newContact = {name, number,};

    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } 
    
    else {
      dispatch(addContact(newContact));
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder='Name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <input
          type="tel"
          name="number"
          placeholder='Number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">
        add contact
      </button>
    </form>
  );
};