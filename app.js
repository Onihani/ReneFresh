const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, "public")))

const server = app.listen(app.get("port"), function () {
  console.log(`App is running on http://localhost:${server.address().port}`);
});
