const getClientDetails = require("../dal/clients.dal.js");

const getClients = async (req, res) => {
  const key = req?.query?.key;
  try {
    if (key == "wti") {
      console.log("I am controller");
      const response = await getClientDetails();
      const responseData = {
        statusCode: 200,
        message: "Success",
        response,
      };
      return res.status(200).json(responseData);
    } else {
      return res.json({ statusCode: 400, message: "Key is missing!" });
    }
  } catch (error) {
    console.error("Error getting clients: ", error.message);
    return res
      .status(500)
      .json({ statusCode: 500, message: "Internal server error" });
  }
};

module.exports = getClients;
