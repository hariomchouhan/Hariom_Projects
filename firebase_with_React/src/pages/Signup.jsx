import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
const goolgeProvider = new GoogleAuthProvider();
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, goolgeProvider);
  }
  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label htmlFor="">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here!"
      />
      <label htmlFor="">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here!"
      />
      <br />
      <button onClick={signupWithGoogle}>Signin with Google</button>
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
