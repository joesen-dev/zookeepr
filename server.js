const express = require("express");

const PORT = process.env.PORT || 3001; // tell app to run  Heroku's default(port 80) = PORT(if it's set) or (if not) default to port 3001
const app = express(); //  instantiate the server
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const fs = require("fs");

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static("public")); // add middleware to specify the root ("public") directory to serve static files

// Use apiRoutes
app.use("/api", apiRoutes); // client navigates to <ourhost>/api, the app will use the router set up in apiRoutes
app.use("/", htmlRoutes); // If / is the endpoint, then the router will serve back our HTML routes

app.listen(PORT, () => {
  console.log(`API server now on port http://localhost:${PORT}!`);
}); //tell server to listen for requests
