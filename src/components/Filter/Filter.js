import React, { Component } from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { FilterChange } from "../../redux/actions/contactsActions";

class Filter extends Component {
  state = { filterValue: "" };

  render() {
    const { filterValue } = this.state;
    return (
      <>
        <label className={styles.label}>
          Find contact by name:
          <input
            type="search"
            name="filter"
            value={filterValue}
            onChange={(e) => {
              this.setState({ filterValue: e.target.value });
              this.props.filterChange(e.target.value);
            }}
          ></input>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterChange: (value) => dispatch(FilterChange(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
