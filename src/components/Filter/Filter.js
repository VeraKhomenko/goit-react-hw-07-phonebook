import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
	<div className={style.form} >
		<label className={style.label} htmlFor="">
			<p className={style.text}>Find contacts by name:</p>
			<input
				className={style.input}
				type="text"
				value={value}
				onChange={onChange}
			/>
		</label>
	</div>

);

const mapStateToProps = (state) => ({
	value: state.contacts.filter,

})
const mapDispatchToProps = dispatch => ({
	onChange: (e) => dispatch(actions.changeContact(e.target.value)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
