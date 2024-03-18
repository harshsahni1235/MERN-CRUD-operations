import axios from "axios";

let config;
const BASE_API_URL = "http://localhost:5000/api";
export const getAllClients = async () => {
  try {
    const reqPayload = { key: "wti" };
    if (reqPayload) {
      config = {
        params: reqPayload,
      };
    }
    return await axios.get(`${BASE_API_URL}/get`, config);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request canceled from get", error.message);
    } else {
      console.error("Error from api call: ", error.message);
    }
  }
};
export const deleteClient = async (reqPayload) => {
  try {
    if (reqPayload) {
      config = {
        params: reqPayload,
      };
    }
    return await axios.delete(`${BASE_API_URL}/delete`, config);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request canceled from delete", error.message);
    } else {
      console.error("Error from api call: ", error.message);
    }
  }
};
export const updateClient = async (reqPayload) => {
  try {
    if (reqPayload) {
      config = {
        params: reqPayload,
      };
    }
    return await axios.put(`${BASE_API_URL}/update`, reqPayload, config);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request canceled from update", error.message);
    } else {
      console.error("Error from api call: ", error.message);
    }
  }
};
export const addClient = async (reqPayload) => {
  try {
    return await axios.post(`${BASE_API_URL}/add`, reqPayload, config);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request canceled  from add", error.message);
    } else {
      console.error("Error from api call: ", error.message);
    }
  }
};
