import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfO9yypwaD389NG4z0sqyd563wUtjx9k8",
  authDomain: "projeto-59-7ac26.firebaseapp.com",
  databaseURL: "https://projeto-59-7ac26-default-rtdb.firebaseio.com",
  projectId: "projeto-59-7ac26",
  storageBucket: "projeto-59-7ac26.appspot.com",
  messagingSenderId: "796692863815",
  appId: "1:796692863815:web:e2dc56ec5835f46c444a62"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();