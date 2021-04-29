import React from 'react';
import { connect } from 'react-redux';
import style from './Filter.module.css';
import { changeContact, contactsSelectors } from '../../redux';

const Filter = ({ value, onChange }) => (
  <div className={style.form}>
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

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
