
(function () {
  // Initialize Firebase

  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("password");
  const btnLogin = document.getElementById("signin");
  const btnSignUp = document.getElementById("signup");
  const btnLogout = document.getElementById("signout");

  //add login event

  btnLogin.addEventListener("click", e => {
    console.log("clicked sign in");
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //signup event
  btnSignUp.addEventListener("click", e => {
    console.log("clicked sign up");
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign up
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  });

  //add auth listen

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove("hide");
      document.getElementById("p").innerHTML = "Signed in";
    } else {
      console.log("not logged in");
      btnLogout.classList.add("hide");
      document.getElementById("p").innerHTML = "Signed out";
    }
  });

}());
