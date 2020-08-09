const express = require("express");
const { response, json } = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello from Code your future!");
});

const msg = {
  msg: "Here are all the songs",
};

app.get("/songs", (request, response) => {
  response.set("Content-Type", "application/json");
  response.send(msg);
});

const msg2 = {
  msg: "The client made a request for song with the id: <client-id-here>",
};

app.get("/songs/:song_id", (request, response) => {
  const id = request.params.song_id;

  response.set("Content-Type", "application/json");
  response.send(msg2);
});

app.listen(9090, () =>
  console.log("Listening for requests on PORT 9090. Ready to accept requests")
);
