import { getContacts, deleteContactById, addNewContact } from "../services/api";

import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
  addContactStart,
  addContactSuccess,
  addContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
} from "../actions/contactsActions";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsStart());

  getContacts()
    .then((response) => dispatch(fetchContactsSuccess(response)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactStart());
  addNewContact(contact)
    .then((response) => dispatch(addContactSuccess(response.data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactStart());
  deleteContactById(id)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch((error) => {
      dispatch(deleteContactError(error));
    });
};
