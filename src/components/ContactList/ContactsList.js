import React, { Component } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactsList.module.css";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "../transitions/pop.module.css";
import * as Selectors from "../../redux/selectors/selectors";

class ContactsList extends Component {
  state = { showError: false };

  render() {
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {this.props.contacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={200}
            classNames={popTransition}
          >
            <li key={contact.id} className={styles.listItem}>
              <Contact {...contact} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: Selectors.getFilteredContacts(state),
  filter: Selectors.getFilterValue(state),
});

export default connect(mapStateToProps)(ContactsList);
