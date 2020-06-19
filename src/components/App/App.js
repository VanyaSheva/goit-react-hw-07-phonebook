import React, { Component } from "react";
import FormContainer from "../Form/FormContainer";
import ContactsList from "../ContactList/ContactsList";
import Filter from "../Filter/Filter";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import popTransition from "../transitions/pop.module.css";
import slideTransition from "../transitions/slide.module.css";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import backSlideTransition from "../transitions/backslide.module.css";
import * as Selectors from "../../redux/selectors/selectors";
import * as contactsOperations from "../../redux/operations/contactsOperations";
import styles from "./App.module.css";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

class App extends Component {
  state = { showTitle: false, showError: false };

  componentDidMount() {
    this.setState({ showTitle: true });
    this.props.onContactsGet();
  }

  showErrorChange = () => {
    this.setState({ showError: true });
    setTimeout(() => {
      this.setState({ showError: false });
    }, 1500);
  };

  render() {
    const { showTitle, showError } = this.state;
    return (
      <div style={containerStyle}>
        <CSSTransition
          in={showError}
          timeout={500}
          classNames={backSlideTransition}
          unmountOnExit
        >
          <ErrorNotification />
        </CSSTransition>
        <CSSTransition
          in={showTitle}
          timeout={500}
          classNames={slideTransition}
          unmountOnExit
        >
          <h1 style={{ marginBottom: "30px" }}>Phonebook</h1>
        </CSSTransition>

        <FormContainer onGetSameName={this.showErrorChange} />
        <CSSTransition
          in={this.props.contacts.length >= 2}
          timeout={500}
          classNames={popTransition}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: Selectors.getAllContacts(state),
});

const mapDidpatchToProps = {
  onContactsGet: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDidpatchToProps)(App);
