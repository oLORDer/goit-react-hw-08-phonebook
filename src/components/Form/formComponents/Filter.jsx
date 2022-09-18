import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter';

import s from '../../Form/form.module.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className={s.find}>
      Find contacts by name
      <br />
      <input type="text" name="filter" onChange={contactsFilter} />
    </label>
  );
}
