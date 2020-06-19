import { Type } from "../actions/contactsActions";
import { combineReducers } from "redux";

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_CONTACTS_SUCCESS:
      return [...state, action.payload];
    case Type.FETCH_CONTACTS_SUCCESS:
      return action.payload;
    case Type.DELETE_CONTACT_SUCCESS:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case Type.FILTER:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case Type.FETCH_CONTACTS_START:
      return true;
    case Type.FETCH_CONTACTS_SUCCESS:
      return false;
    case Type.FETCH_CONTACTS_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  loading: loadingReducer,
  filter: filterReducer,
});
