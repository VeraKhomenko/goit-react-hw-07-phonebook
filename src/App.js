import React from 'react';
import Container from './components/Container';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  )
}

export default App;





// import shortid from 'shortid';

// class App extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// }
// addFilterContact = data => {
//   if (this.state.contacts.find(contact => contact.name === data.name)) {
//     alert(`${data.name} is already in contacts`);
//     return;
//   }

// const newContact = {
//   id: shortid.generate(),
//   name: data.name,
//   number: data.number,

// };
//   this.setState(prevState => ({
//     contacts: [ ...prevState.contacts, newContact ],
//   }));
// }
// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

//   handleDeleteContact = idContact => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== idContact),
//     }));
// };


// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;

//   const normalizedContactName = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedContactName),
//   );

// };

// componentDidMount() {
//   console.log('Add componentDidMount');
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }

// }

// componentDidUpdate(prevProps, prevState) {
//   console.log('Add componentDidUpdate');
//   if (this.state.contacts !== prevState.contacts) {
//     console.log('Обновилось поле контактов');

//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
// }