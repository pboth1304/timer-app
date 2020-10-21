const express = require("express");
const bodyParser = require("body-parser");
const WebSocket = require("ws");

const app = express();
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist/`));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log("Server running on", port);
});

// const wss = new WebSocket.Server({ port: 8081 });

// console.log("server", wss);

// wss.on("connection", (ws) => {
//   console.log("start", ws);

//   ws.on("message", (message) => {
//     console.log("message", message);
//   });

//   ws.on("error", (error) => {
//     OnError(error);
//   });

//   ws.on("close", (ws) => {
//     onClose();
//   });

//   ws.send("test");
// });
