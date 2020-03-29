firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
        console.log("Logged on as " + user.email);
    } else {
        //No user signed in
        console.log("Not signed in");
    }
})

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Login button has been hit");
    login();
})

function login() {
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passField").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error: " + errorMessage);

      });

      var user = firebase.auth().currentUser;

      if (user) {
          console.log("Congrats, You're in!");
      }else {
          console.log("Still out buddy.");
      }
  }

const signUpForm = document.getElementById("SignUpForm");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

})

function createUserSignUpEmail() {
    
    var full_name = document.getElementById("fullName").value;
    var myUsername = document.getElementById("userName").value
    var email = document.getElementById("emailFieldSignUp").value;
    var password = document.getElementById("passFieldSignUp").value;
    var passwordRe_enter = document.getElementById("passFieldSignUp").value;

    if ( full_name == "" || myUsername == "" || email == "" || password == "" || passwordRe_enter == "") {
        window.alert("Please fill out all forms");
    }else {
        var db = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
            window.alert("Error " + errorMessage);
            // ...
          });

          var myuser = firebase.auth().currentUser;

          db.collection("users").doc(myuser.uid).set({
            full_name:  full_name,
            username: myUsername,
          })
          .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document");
          });
    }

}