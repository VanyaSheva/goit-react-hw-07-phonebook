import { createSelector } from "reselect";
export const getAllContacts = (state) => state.contacts;

export const getFilterValue = (state) => state.filter;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
