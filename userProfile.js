const express = require('express')
const app = express()
const port = 3000
const pug = require('pug');
const admin = require('./node_modules/firebase-admin');

// initialize the server account so the firebase can authenticate it us allowed
let serviceAccount = require('/Users/tonyalas/universityOfWindsor/year3/winter2020/WinHacks_Project/test/serviceAccountKey.json');
// the collection that we will be using
const collectionKey = "users";

// initialize the app for use with the database
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://testloginweb-d8661.firebaseio.com"
});

// create db to be able to add to the collection and call functions
let db = admin.firestore();

var userdata = [];  // create an array to hold all of the array elements that contains users from the database

let userRef = db.collection(collectionKey);
let allUsers = userRef.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            userdata.push(doc.data());
        })
    })
    .catch(err => {
        console.log("error getting document", err);
    });

app.set('views', './views');
app.set('view engine', 'pug');

// render the pug html template and pass the necessary variables
app.get('/', function(req, res) {
    res.render('profile', {userdata: userdata})
})

// print this line to the console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))