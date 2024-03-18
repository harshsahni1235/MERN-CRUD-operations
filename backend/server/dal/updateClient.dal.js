const { Pool } = require("pg");
const connectionString = require("../config/connectPostgres");
const pool = new Pool(connectionString);

const updateDetails = async (
  firstName,
  lastName,
  emailId,
  phoneNumber,
  project
) => {
  return await Promise.resolve(
    pool
      .query(
        "UPDATE employee_management_system.employees SET first_name = $1, last_name = $2, email_id = $3, phone_number = $4, project = $5 WHERE email_id = $3",
        [firstName, lastName, emailId, phoneNumber, project]
      )
      .then(() => {
        return "Updated successfully!";
      })
      .catch((err) => {
        throw err;
      })
  );
};

module.exports = updateDetails;
