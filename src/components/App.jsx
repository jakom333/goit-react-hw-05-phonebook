import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactsList/ContactList";
import Filter from "./filter/Filter";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { addContact, removeContact } from "../redux/phonebook/contacts.actions";

class App extends Component {
  createContact = ({ name, number }) => {
    // const sameName = this.state.contacts.some(
    //   (contact) => contact.name === name || contact.number === number
    // );
    // if (sameName) {
    //   alert(`This contact is already exists`);
    // } else if (name.length === 0 || number.length === 0) {
    //   alert(`Fill in all the fields`);
    // } else {
    //   const contact = {
    //     id: shortid.generate(),
    //     name,
    //     number,
    //   };
    // }
    this.props.addContact({ name, number });
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.createContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.props.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = { addContact, removeContact };

export default connect(mapStateToProps, mapDispatchToProps)(App);
