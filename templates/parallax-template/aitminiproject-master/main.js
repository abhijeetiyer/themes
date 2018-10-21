// Initialize Firebase
 var config = {
	 apiKey: "AIzaSyDbZkhmB3b7PXDIiDmBrH5UkO3DgZ89f2o",
	 authDomain: "contact-form-17f34.firebaseapp.com",
	 databaseURL: "https://contact-form-17f34.firebaseio.com",
	 projectId: "contact-form-17f34",
	 storageBucket: "contact-form-17f34.appspot.com",
	 messagingSenderId: "567602334045"
 };
 firebase.initializeApp(config);
 //reference messages collection
 var messagesRef = firebase.database().ref('messages');
//listen for form submit
//call the form and add an  event lsitener to the submit i.e event of  function submitform
document.getElementById('contactForm').addEventListener('submit',submitForm);
//function to submit
function submitForm(e){
	e.preventDefault();
	var name  = getInputVal('name');
	var telephone = getInputVal('telephone');
	    var email = getInputVal('email');
	var message = getInputVal("message");
	//saving the message from the form
	saveMessage(name,telephone,email,message);
//show alert
document.querySelector('.alert').style.display = 'block';
//hide alert after three minutes
setTimeout(function()
{
	document.querySelector('.alert').style.display = 'none';
},3000)
//clear the form after submit
document.getElementById('contactForm').reset();
}
function getInputVal(id){
	return document.getElementById(id).value;

}


//save the message to firebase
function saveMessage(name, telephone, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		telephone:telephone,
		email:email,
		message:message
	});
}
