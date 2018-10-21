// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCoY1BLUKaHDucKrT70TyElN3GZrYyuhms",
    authDomain: "adminlogin-855af.firebaseapp.com",
    databaseURL: "https://adminlogin-855af.firebaseio.com",
    projectId: "adminlogin-855af",
    storageBucket: "adminlogin-855af.appspot.com",
    messagingSenderId: "737087742238"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("adminuser-div").style.display = "block";
      document.getElementById("adminlogoutbtn").style.display = "block";
      document.getElementById("emplog").style.display = "none";
document.getElementById("adminlogin-div").style.display = "none";

    } else {
      // No user is signed in.
      document.getElementById("adminuser-div").style.display = "none";
      document.getElementById("adminlogoutbtn").style.display = "none";
      document.getElementById("emplog").style.display = "block";
      document.getElementById("adminlogin-div").style.display = "block";
    }
  });
  function adminlogin(){
    var adminid = document.getElementById("adminid").value;
    var adminpass = document.getElementById("adminpass").value;
    firebase.auth().signInWithEmailAndPassword(adminid, adminpass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error:" + errorMessage);
      // ...
    });
  }
  function adminlogout(){
    firebase.auth().signOut();
    document.getElementById('adminlog').reset();
  }
