import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin Success"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label htmlFor="">Enter your email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email here"
      />
      <label htmlFor="">Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password here"
      />
      <button onClick={signinUser}>Signin me in</button>
    </div>
  );
};

export default SigninPage;
