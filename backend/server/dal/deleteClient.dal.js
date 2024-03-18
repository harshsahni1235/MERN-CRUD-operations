const { Pool } = require("pg");
const connectionString = require("../config/connectPostgres");
const pool = new Pool(connectionString);

const deleteData = async (emailId) => {
  console.log(emailId);
  return await Promise.resolve(
    pool
      .query(
        "DELETE FROM employee_management_system.employees WHERE email_id = $1",
        [emailId]
      )
      .then((res) => {
        console.log(res);
        return "Deleted successfully!";
      })
      .catch((err) => {
        throw err;
      })
  );
};

module.exports = deleteData;
