import { connect } from "react-redux";
import * as ContactsOperations from "../../redux/operations/contactsOperations";
import Form from "./Form";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  onFormSubmit: ContactsOperations.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
