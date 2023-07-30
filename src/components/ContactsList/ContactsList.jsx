import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectContactsList, selectFilter } from '../../redux/selectors';
import { useMemo } from 'react';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContactsList);

  const filtredContacts = useMemo(() => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contacts =>
        contacts.name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    }
  }, [contacts, filter]);

  return (
      <ul>
        {filtredContacts.map(({ name, number, id }) => (
          <Item key={id}>
            <p><b>{name}</b> <span>{number}</span></p>

            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              x
            </button>
          </Item>
        ))}
      </ul>
  );
};