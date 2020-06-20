import axios from "axios";

axios.defaults.baseURL = "http://localhost:8086";

export const getContacts = async () => {
  try {
    const request = await axios.get("/contacts");
    return request.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContactById = async (id) => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const addNewContact = async (contact) => {
  try {
    return await axios.post("/contacts", contact);
  } catch (error) {
    throw error;
  }
};
