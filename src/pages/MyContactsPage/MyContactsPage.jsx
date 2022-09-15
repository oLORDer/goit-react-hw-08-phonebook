import Form from 'components/Form/Form';
import Filter from 'components/Form/formComponents/Filter';
import ContactList from 'components/Form/formComponents/ContactList';

const MyContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

export default MyContactsPage;
