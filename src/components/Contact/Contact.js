import React, { Fragment } from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as contactsOperations from "../../redux/operations/contactsOperations";
const Contact = ({ name, phone, id, onDelete }) => (
  <Fragment>
    <p className={styles.name}>{name}</p>
    <p className={styles.phone}>{phone}</p>
    <button
      type="button"
      className={styles.button}
      onClick={() => onDelete(id)}
    >
      &times;
    </button>
  </Fragment>
);

const mapDispatchToProps = {
  onDelete: contactsOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
