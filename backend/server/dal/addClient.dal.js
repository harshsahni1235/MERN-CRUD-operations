const { Pool } = require("pg");
const connectionString = require("../config/connectPostgres");
const pool = new Pool(connectionString);

const addClientDetails = async (
  firstName,
  lastName,
  emailId,
  phoneNumber,
  project
) => {
  return await Promise.resolve(
    pool
      .query(
        "INSERT INTO employee_management_system.employees (first_name, last_name, email_id, phone_number, project) VALUES ($1, $2, $3, $4, $5) RETURNING id",
        [firstName, lastName, emailId, phoneNumber, project]
      )
      .then((res) => {
        return res?.rows[0]?.id;
      })
      .catch((err) => {
        throw err;
      })
  );
};

module.exports = addClientDetails;
