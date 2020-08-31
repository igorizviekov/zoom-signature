const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
//allow to share data to another servers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", routes);
app.listen(process.env.PORT || 8080);
