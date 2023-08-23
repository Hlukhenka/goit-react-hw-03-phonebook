import React, { Component } from 'react';
import css from '../Contact/Contact.module.css';

class Contact extends Component {
  render() {
    const { number, name, id, onDelete } = this.props;
    return (
      <>
        <li key={id} className={css.item}>
          <span className={css.span}>
            {name}: {number}
          </span>
          <button onClick={() => onDelete(id)} className={css.button}>
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default Contact;
