const express = require("express");
const app = express();
const httpPort = process.env.PORT;
const routes = require("./routes/index.route.js");
const bodyParser = require("body-parser");
const cors = require("cors");

app.listen(httpPort, function (err) {
  if (err) console.log("Error listening: ", err);
  console.log(`Server listening on port ${httpPort}!`);
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
