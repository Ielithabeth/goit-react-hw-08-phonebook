import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder='Find contacts by name'
          value={filter}
          onChange={showFilteredContacts}
        />
      </label>
    </div>
  );
};