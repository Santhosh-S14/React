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

  const database = firebase.database();

  export { firebase, database as default };

//   database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });
//       console.log(expenses);
//   });

//   database.ref('expenses').once('value')
//    .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });
//       console.log(expenses);
//    })

//   database.ref('expenses').push({
//    description: 'Wifi', 
//    note: 'Sep month',
//    amount: 5883,
//    createdAt: 976123498763
//   });


//   const onValueChange = database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//    console.log("Error fetching data", e);
//   });

//   database.ref()
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    })
//    .catch((e) => {
//       console.log("Error fetching data ", e);
//    });


//  database.ref().set({
//     name: 'Santhosh Santhanam',
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Intact'
//     },
//     location: {
//         city: 'Montreal',
//         country: 'Canada'
//     }
//  }).then(() => {
//     console.log('Data is saved');
//  }).catch((e) => {
//     console.log('This failed', e);
//  });

//  database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Vancouver'
//  });