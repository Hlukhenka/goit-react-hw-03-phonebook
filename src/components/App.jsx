import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const KEY = 'contact-list';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate() {
    localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const localStorageData = localStorage.getItem(KEY);

    if (localStorageData) {
      const contacts = JSON.parse(localStorageData);
      this.setState({ contacts });
    }
  }

  getfilteredContact = () => {
    const { contacts, filter } = this.state;
    const filteredContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filter ? filteredContact : contacts;
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
      id: nanoid(),
    };

    const prevContact = this.state.contacts.reduce((acc, contact) => {
      acc.push(contact.name, contact.number);
      return acc;
    }, []);

    if (prevContact.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    if (prevContact.includes(contact.number)) {
      alert(`Contact with number ${contact.number} already exists`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });

    evt.currentTarget.reset();
  };

  filterContact = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter search={this.filterContact} value={this.state.filter} />
        <ContactList
          contacts={this.getfilteredContact()}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
