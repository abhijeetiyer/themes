
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSMfMjqxSSbdjFsdv2rUbn733selWCcrQ",
    authDomain: "emplogin-736e7.firebaseapp.com",
    databaseURL: "https://emplogin-736e7.firebaseio.com",
    projectId: "emplogin-736e7",
    storageBucket: "",
    messagingSenderId: "1046663950744"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("user-div").style.display = "block";
      document.getElementById("logoutbtn").style.display = "block";
      document.getElementById("adminlog").style.display = "none";
document.getElementById("login-div").style.display = "none";

    } else {
      // No user is signed in.
      document.getElementById("user-div").style.display = "none";
      document.getElementById("logoutbtn").style.display = "none";
      document.getElementById("adminlog").style.display = "block";
      document.getElementById("login-div").style.display = "block";
    }
  });

function login(){
  var empid = document.getElementById("empid").value;
  var emppass = document.getElementById("emppass").value;
  firebase.auth().signInWithEmailAndPassword(empid, emppass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error:" + errorMessage);
    // ...
  });
}
function logout(){
  firebase.auth().signOut();
  document.getElementById('Emplog').reset();
}
