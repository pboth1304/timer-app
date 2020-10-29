const express = require("express");
const bodyParser = require("body-parser");
const WebSocket = require("ws");
const http = require("http");
var path = require("path");

const app = express();
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist/`));

// Send all other requests to the Angular app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const sent = JSON.parse(message);

    if (sent.timerStart) {
      wss.clients.forEach((client) => {
        const msg = { timerStart: true };
        console.log("sent", JSON.stringify(msg));
        client.send(JSON.stringify(msg));
      });
    }
  });
});

server.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log("Server running on", port);
});
