const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllPosts } = require("./handlers/posts");
const { signup, login } = require("./handlers/users");

const firebase = require("firebase");
firebase.initializeApp(config);

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);

// users route
app.post("/signup", signup);
app.post("/login", login);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
