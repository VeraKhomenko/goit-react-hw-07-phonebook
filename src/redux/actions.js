
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('app/AddContact');

const deleteContact = createAction('app/DeleteContact');

const changeContact = createAction('app/ChangeContact');


export default {
	addContact, deleteContact, changeContact
};

