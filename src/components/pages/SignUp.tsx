import SignUpForm from "../modals/SignUpForm/SignUpForm";
import fb from "../../config/firebase";
import firebase from "firebase/compat/app";

function SignUp() {

  let usersRef = firebase.database().ref('users');
  console.log(usersRef);

  return(
    <SignUpForm/>
  )
}

export default SignUp;
