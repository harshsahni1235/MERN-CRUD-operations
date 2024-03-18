import axios from "axios";

const axiosApi = async (url, method, reqPayload, otherConfig) => {
  const BASE_API_URL = "http://localhost:5000/api";
  const newUrl = `${BASE_API_URL}${url}`;
  let response;
  const config = {
    ...otherConfig,
  };

  try {
    if (method === "POST") {
      response = await axios.post(newUrl, reqPayload);
    } else if (method === "GET") {
      if (reqPayload) {
        config.params = reqPayload;
      }
      response = await axios.get(newUrl, config);
    } else if (method === "PUT") {
      if (reqPayload) {
        config.params = reqPayload;
      }
      response = await axios.put(newUrl, reqPayload, config);
    } else if (method === "DELETE") {
      if (reqPayload) {
        config.params = reqPayload;
      }
      response = await axios.delete(newUrl, config);
    }
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request canceled", error.message);
    } else {
      console.error("Error from api call: ", error.message);
    }
  }
};

export default axiosApi;
