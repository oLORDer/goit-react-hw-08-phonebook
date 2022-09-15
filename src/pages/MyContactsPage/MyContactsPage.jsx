import Form from 'components/Form/Form';
import Filter from 'components/Form/formComponents/Filter';
import ContactList from 'components/Form/formComponents/ContactList';

const MyContactsPage = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

export default MyContactsPage;
