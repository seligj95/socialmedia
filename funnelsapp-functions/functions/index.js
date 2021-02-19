const functions = require("firebase-functions");

const app = require('express')();

const FBAuth = require("./util/fbAuth");

const { getAllPosts, postOnePost, getPost, commentOnPost, likePost, unlikePost, deletePost } = require("./handlers/posts");
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users");

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);
app.get("/post/:postId", getPost); // didn't add FB Auth so unauthenticated users can view posts (unprotected route) - will need to change that
app.delete('/post/:postId', FBAuth, deletePost);
app.get("/post/:postId/like", FBAuth, likePost)
app.get("/post/:postId/unlike", FBAuth, unlikePost)
app.post("/post/:postId/comment", FBAuth, commentOnPost);

// users route
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
