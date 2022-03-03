const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBynJwA4Xslx2_X9xZ9s2nH5FbzoUF_TkQ",
    authDomain: "storeonlineeg-e1c21.firebaseapp.com",
    databaseURL: "https://storeonlineeg-e1c21.firebaseio.com",
    projectId: "storeonlineeg-e1c21",
    storageBucket: "storeonlineeg-e1c21.appspot.com",
    messagingSenderId: "678264072851",
    appId: "1:678264072851:web:a00e75450c25dfe5187b66",
    measurementId: "G-HDBEHZY8ML"
  };


firebase.initializeApp(firebaseConfig);

module.exports = firebase.firestore();