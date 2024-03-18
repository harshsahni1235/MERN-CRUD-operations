const deleteData = require("../dal/deleteClient.dal.js");

const deleteClientData = async (req, res) => {
  const emailId = req?.query?.emailId;

  try {
    if (emailId) {
      const response = await deleteData(emailId);
      const responseData = {
        statusCode: 200,
        message: "Success",
        response,
      };
      return res.status(200).json(responseData);
    } else {
      return res.json({ statusCode: 400, message: "Email is missing!" });
    }
  } catch (error) {
    console.error("Error deleting user: ", error.message);
    return res
      .status(500)
      .json({ statusCode: 500, message: "Internal server error" });
  }
};

module.exports = deleteClientData;
