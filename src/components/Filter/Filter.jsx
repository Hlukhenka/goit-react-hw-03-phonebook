import React, { Component } from 'react';
import css from '../Filter/Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          Find contacts by name
          <input
            className={css.input}
            placeholder="Search"
            onChange={this.props.search}
            value={this.props.value}
          ></input>
        </label>
      </>
    );
  }
}

export default Filter;
