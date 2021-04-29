import { createSelector } from 'reselect';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const allContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [ allContacts, getFilter ],
  (contacts, filter) => {
    const normalizedContactName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContactName),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};

// const getVisibleContacts = state => {
// 	const contacts = allContacts(state);
// 	const filter = getFilter(state);
// 	const normalizedContactName = filter.toLowerCase();
// 	return contacts.filter(({ name }) =>
// 		name.toLowerCase().includes(normalizedContactName),
// 	);
// }
