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
  }
