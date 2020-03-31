import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import phoneActions from "../redux/phonebook/phoneActions";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name} : {contact.number}
        </p>
        <button type="submit" onClick={() => onRemoveContact(contact.id)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);


const mapStateToProps = state => {
  const {contacts,filter} = state;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return {
    contacts: visibleContacts,
    
  };
};

const mapDispatchToProps = {
  onRemoveContact: phoneActions.removePhone
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired
};