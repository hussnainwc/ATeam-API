const express = require("express");
const app = express();
const config = require("config");
const connect = require("./connection.js");
const bodyParser = require("body-parser");
const auth = require("./routes/auth.js");
const users = require("./routes/users.js");
const clubs = require("./routes/clubs.js");

if (!config.get("jwtAccessKey") || !config.get("jwtRefreshKey")) {
  console.error("Access key or Refresh key is not set");
  return process.exit(1);
}

connect()
  .then(() => console.log("connected to database"))
  .catch((error) => console.log(`error : ${error.message}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/auth", auth);
app.use("/api/user", users);
app.use("/api/club", clubs);

app.get("/test", (req, res) => {
  res.send("works");
});

app.listen(config.get("port"), () => {
  console.log(`listening on port ${config.get("port")}`);
});
