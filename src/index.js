import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { documentId, getFirestore } from "firebase/firebase-firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA6XmqP76EBAG1XHZhtbJn6lDDagYH14xI",
  authDomain: "aqueous-encoder-301807.firebaseapp.com",
  databaseURL: "https://aqueous-encoder-301807-default-rtdb.firebaseio.com",
  projectId: "aqueous-encoder-301807",
  storageBucket: "aqueous-encoder-301807.appspot.com",
  messagingSenderId: "1012545270359",
  appId: "1:1012545270359:web:2f1eaf15ac45e14312e912",
  measurementId: "G-HKQ1DCN73M",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // email verified
    emailVerified: Boolean;
  } else {
    // User is signed out
    // ...
  }
});

setUserProperties(analytics, { favourite_username: "" });

admin.initializeApp();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

const functions = require("firebase-functions");

exports.makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate((snap, context) => {
    const original = snap.data().original;
    console.log("Uppercasing", context.params.documentId, original);
    const uppercase = original.toUpperCase();
    return snap.ref.set({ uppercase }, { merge: true });
  });

const admin = require("firebase-admin");
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin
    .firestore()
    .collection("messages")
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate((snap, context) => {
    // Grab the current value of what was written to Firestore.
    const original = snap.data().original;

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log("Uppercasing", context.params.documentId, original);

    const uppercase = original.toUpperCase();

    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return snap.ref.set({ uppercase }, { merge: true });
  });

// [START auth_sign_in_custom_modular]
import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth();
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
// [END auth_sign_in_custom_modular]
