firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
        console.log("Logged on as " + user.email);
    } else {
        //No user signed in
        window.location.href = "homepage.html";
        console.log("Not signed in");
    }
})

const signOutForm = document.getElementById("signOutBut");
signOutForm.addEventListener('Submit', (e) => {
    e.preventDefault();

    window.alert("Sign Out Button Hit");

    auth.signOut().then(() => {
        console.log("Sign Out button clicked, Logged Out");
    })
})

function logMeOut() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //user is logged in
            window.alert("Sign Out Successful");
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
              }).catch(function(error) {
                // An error happened.
              });
            console.log("Logged on as " + user.email);
        } else {
            //No user signed in
            console.log("Not signed in");
        }
    })
}