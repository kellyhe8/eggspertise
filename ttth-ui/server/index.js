// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Leap.loop({ hand:function(hand) {
//   console.log( hand.screenPosition() );

// }.use('screenPosition')
// })



app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.post("/post", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
