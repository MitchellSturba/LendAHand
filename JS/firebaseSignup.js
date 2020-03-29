//This checks if the user is already logged on.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
        console.log("Logged on as " + user.email);

        window.location.href = "taskListings.html";
    } else {
        //No user signed in
        console.log("Not signed in");
    }
})

//When sign up button is clicked
const signUpForm = document.getElementById("SignUpForm");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    createUserSignUpEmail();
})

function createUserSignUpEmail() {
    
    // Get all user fields
    var full_name = document.getElementById("fullName").value;
    var myUsername = document.getElementById("userName").value
    var email = document.getElementById("emailFieldSignUp").value;
    var password = document.getElementById("passFieldSignUp").value;
    var passwordRe_enter = document.getElementById("passFieldSignUp").value;

    //make sure they didn't leave anything blank
    if ( full_name == "" || myUsername == "" || email == "" || password == "" || passwordRe_enter == "") {
        window.alert("Please fill out all forms");
    }else {
        var db = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
            //display error message if something went wrong.
            window.alert("Error " + errorMessage);
            // ...
          }).then(cred => {
          //Add User details to firebase
          return db.collection("users").doc(cred.user.uid).set({
            name: full_name,
            username: myUsername
          });
        });
    }

}
