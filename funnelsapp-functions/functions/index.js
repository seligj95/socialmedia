const functions = require("firebase-functions");

const app = require('express')();

const FBAuth = require("./util/fbAuth");

const { getAllPosts, postOnePost } = require("./handlers/posts");
const { signup, login, uploadImage } = require("./handlers/users");

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);

// users route
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage)

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
