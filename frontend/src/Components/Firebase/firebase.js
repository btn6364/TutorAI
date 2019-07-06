import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey:  "AIzaSyBjWsnDjHMvwWqoAqcGFyP3yJMoYwQzck4" ,
    authDomain: "vagc-ai-tutor.firebaseapp.com",
    databaseURL: "https://vagc-ai-tutor.firebaseio.com",
    projectId: "vagc-ai-tutor",
    storageBucket: "",
    messagingSenderId: "1085699368493",
};
class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
  }
  
export default Firebase;
  