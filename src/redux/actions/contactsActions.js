export const Type = {
  FETCH_CONTACTS_START: "FETCH_CONTACTS_START",
  FETCH_CONTACTS_SUCCESS: "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR: "FETCH_CONTACTS_ERROR",
  ADD_CONTACTS_START: "ADD_CONTACTS_START",
  ADD_CONTACTS_SUCCESS: "ADD_CONTACTS_SUCCESS",
  ADD_CONTACTS_ERROR: "ADD_CONTACTS_ERROR",
  DELETE_CONTACT_START: "DELETE_CONTACT_START",
  DELETE_CONTACT_SUCCESS: "DELETE_CONTACT_START",
  DELETE_CONTACT_ERROR: "DELETE_CONTACT_ERROR",
  FILTER: "FILTER",
};

export const fetchContactsStart = () => ({
  type: Type.FETCH_CONTACTS_START,
});

export const fetchContactsSuccess = (contacts) => ({
  type: Type.FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsError = (error) => ({
  type: Type.FETCH_CONTACTS_ERROR,
  payload: error,
});

export const addContactStart = () => ({
  type: Type.ADD_CONTACTS_START,
});
export const addContactSuccess = (contact) => ({
  type: Type.ADD_CONTACTS_SUCCESS,
  payload: contact,
});
export const addContactError = (error) => ({
  type: Type.ADD_CONTACTS_ERROR,
  payload: error,
});

export const deleteContactStart = () => ({
  type: Type.DELETE_CONTACT_START,
});

export const deleteContactSuccess = (id) => ({
  type: Type.DELETE_CONTACT_SUCCESS,
  payload: id,
});

export const deleteContactError = (error) => ({
  type: Type.DELETE_CONTACT_ERROR,
  payload: error,
});

export const FilterChange = (value) => ({
  type: Type.FILTER,
  payload: value,
});
