firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
        console.log("Logged on as " + user.email);
        const welcomeMessage = document.getElementById("welcome");

        var db = firebase.firestore();
        var docRef = db.collection("users").doc(user.uid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        welcomeMessage.innerHTML = db.document("users")
    } else {
        //No user signed in
        console.log("Not signed in");
    }
})
