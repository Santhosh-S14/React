import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDHyNcI1rBJ_H9e47avNRWkQjNQC0SBo5A",
    authDomain: "expensify-b7ded.firebaseapp.com",
    databaseURL: "https://expensify-b7ded-default-rtdb.firebaseio.com",
    projectId: "expensify-b7ded",
    storageBucket: "expensify-b7ded.appspot.com",
    messagingSenderId: "671543683477",
    appId: "1:671543683477:web:54d4ad6baeae6ff05fae9c",
    measurementId: "G-FQRSJJ5ZF5"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set(
    {
        'name': 'Santhosh Santhanam'
    }
  );