import React, { Component } from "react";
import styles from "./ErrorNotification.module.css";

class ErrorNotification extends Component {
  render() {
    return (
      <>
        <div className={styles.errorBox}>
          <p>This contact is already exist</p>
        </div>
      </>
    );
  }
}

export default ErrorNotification;
