import React from "react";
import Contact from "./Contact";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/phonebook/contacts.actions";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact
            contact={contact}
            onRemoveContact={() => removeContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onRemoveContact: PropTypes.func.isRequired,
// };

const getFilteredContacts = (allcContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allcContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state;
  const filteredContacts = getFilteredContacts(contacts, filter);
  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps, { removeContact })(ContactList);
