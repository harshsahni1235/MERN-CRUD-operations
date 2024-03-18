const updateDetails = require("../dal/updateClient.dal.js");

const updateClientDetails = async (req, res) => {
  const reqBody = req?.query;
  if (
    !reqBody?.firstName ||
    !reqBody?.lastName ||
    !reqBody?.emailId ||
    !reqBody?.phoneNumber
  ) {
    return res.json({
      statusCode: 400,
      message: "Missing name or email or phone number!",
    });
  }
  const { firstName, lastName, emailId, phoneNumber, project } = reqBody;
  try {
    const response = await updateDetails(
      firstName,
      lastName,
      emailId,
      phoneNumber,
      project
    );
    const responseData = {
      statusCode: 200,
      message: "Success",
      response,
    };
    return res.status(200).json(responseData);
  } catch (error) {
    console.error("Error updating user: ", error.message);
    return res
      .status(500)
      .json({ statusCode: 500, message: "Internal server error" });
  }
};

module.exports = updateClientDetails;
