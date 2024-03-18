const { Pool } = require("pg");
const connectionString = require("../config/connectPostgres");
const pool = new Pool(connectionString);

const getClientDetails = async (id) => {
  console.log("I am getUserDetails");

  return await Promise.resolve(
    pool
      .query("SELECT * FROM employee_management_system.employees")
      .then((res) => {
        const data = res.rows;
        console.log(res.rows);
        return data;
      })
      .catch((err) => {
        throw err;
      })
  );
};

module.exports = getClientDetails;
