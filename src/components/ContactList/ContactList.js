import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<ul className={style.form}>
			{contacts.map(({ id, name, number }) => (
				<li className={style.item} key={id}>
					<span className={style.text}>{name}</span>
					<span className={style.text__number}>{number}</span>
					<button
						type="button"
						className={style.button}
						onClick={() => onDeleteContact(id)}
					>
						<p>Delete</p>
					</button>
				</li>))}
		</ul>
	)
};
ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
	onDeleteContact: PropTypes.func.isRequired
};
const getVisibleContacts = (allContacts, filter) => {
	console.log(allContacts);
	console.log(filter);
	const normalizedContactName = filter.toLowerCase();

	return allContacts.filter(({ name }) =>
		name.toLowerCase().includes(normalizedContactName),
	);

};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
	contacts: getVisibleContacts(items, filter)
});


const mapDispatchToProps = dispatch => ({
	onDeleteContact: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
