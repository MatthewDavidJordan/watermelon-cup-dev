/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
// const {logger} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/v2/https");
// const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// // The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
// const {getFirestore} = require("firebase-admin/firestore");

const functions = require('firebase-functions');

initializeApp();

// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate((user) => {
    console.log('user created', user.email, user.uid);
    return null;
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete((user) => {
    console.log('user deleted', user.email, user.uid);
    return null;
});