const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist/`));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log("Server running on", port);
});
