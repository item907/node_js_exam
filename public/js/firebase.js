const firebaseConfig = {
    apiKey: "AIzaSyAnlim0NVZJ3UCyzFBUINIbcynnTgGKYjU",
    authDomain: "order-943c4.firebaseapp.com",
    projectId: "order-943c4",
    storageBucket: "order-943c4.appspot.com",
    messagingSenderId: "114622777423",
    appId: "1:114622777423:web:e44b72376287f1600c023a",
    measurementId: "G-QXHBG7W1L1"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();