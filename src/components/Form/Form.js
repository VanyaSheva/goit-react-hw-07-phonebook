import React from "react";
import css from "./Form.module.css";
import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    phone: "",
    id: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.contacts.find((contact) => contact.name === this.state.name)
    ) {
      this.props.onGetSameName();
      return this.setState({
        name: "",
        phone: "",
      });
    }
    this.props.onFormSubmit({ ...this.state });
    this.setState({
      name: "",
      phone: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          className={css.input}
        ></input>
        <input
          type="text"
          placeholder="Enter number"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          required
          className={css.input}
        ></input>
        <button type="submit" className={css.button}>
          Save contact
        </button>
      </form>
    );
  }
}

export default Form;
