var firebaseConfig = {
  apiKey: "AIzaSyCSupVGgJCVsy8HhTIntKwru17aHDsQ7vU",
  authDomain: "web1-d7242.firebaseapp.com",
  databaseURL: "https://web1-d7242-default-rtdb.firebaseio.com",
  projectId: "web1-d7242",
  storageBucket: "web1-d7242.appspot.com",
  messagingSenderId: "16802264900",
  appId: "1:16802264900:web:6100f1d3efe40c09708911"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var username = document.getElementById('username').value
  var day1 = document.getElementById('say_something').value
  var day2 = document.getElementById('say_something2').value
  

  database.ref('users/' + username).set({
    email : email,
    username : username,
    d1 : day1,
    d2 : day2
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()
    
    var date1 = new Date(data.d1) 
    var date2 = new Date(data.d2)
    var c= 1000 * 60 * 60 * 24;
    alert(((date2.getTime() - date1.getTime()) / c)-7)
  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}
