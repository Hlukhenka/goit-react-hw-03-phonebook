import React, { Component } from 'react';
import Contact from './Contact/Contact';
import css from '../ContactList/ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <>
        <ul className={css.list}>
          {contacts.map(({ name, number, id }) => (
            <Contact
              key={id}
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
