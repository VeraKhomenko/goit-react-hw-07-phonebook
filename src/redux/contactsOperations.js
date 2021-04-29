import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contact');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
export default {
  addContact,
  deleteContact,
  fetchContacts,
};

// const fetchContacts = () => dispatch => {
// 	dispatch(fetchContactsRequest());

// 	axios
// 		.get('/contact')
// 		.then(({ data }) => dispatch(fetchContactsSuccess(data)))
// 		.catch(error => dispatch(fetchContactsError(error)));
// };

// const addContact = ({ name, number }) =>  dispatch => {
// 	const contact = {
// 		name,
// 		number,
// 	};

// 	dispatch(addContactRequest());

// 	axios
// 		.post('/contacts', contact)
// 		.then(({ data }) =>
// 			dispatch(addContactSuccess(data)))
// 		.catch(error => dispatch(addContactError(error)));
// };

// const deleteContact = contactId => dispatch => {
// 	dispatch(deleteContactRequest());

// 	axios
// 		.delete(`/contacts/${contactId}`)
// 		.then(() => dispatch(deleteContactSuccess(contactId)))
// 		.catch(error => dispatch(deleteContactError(error)));
// }
