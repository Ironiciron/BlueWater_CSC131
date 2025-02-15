import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from "../firebase-config";

const LoginModal = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // perform login logic here
//   };

const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

const [user, setUser] = useState({});

useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
  });

}, []);


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="modal">
      <IconButton
        edge="end"
        color="inherit"
        aria-label="close"
        onClick={() => {
          props.onClose();
        }}
        sx={{ position: "absolute", top: "10px", right: "10px", color: "#fff" }}
      >
        <CloseIcon />
      </IconButton>
      <Typography align="center" variant="h3" fontFamily={"Georgia"}>
        {props.name}
      </Typography>
      {/* <Typography align="center" sx={{ color: "#fff" }} variant="h2">
        Login
      </Typography> */}
      <Stack spacing={4}>

      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user ? user.email : "Not Logged In"}

      <button onClick={logout}> Sign Out </button>
        {/* <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
            },
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          //value={search}
          //onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="E-mail Address"
          type="text"
        />
        <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
            },
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          //value={search}
          //onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Password"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#004000",
            width: "100px",
          }}
          variant="contained"
        >
          Submit
        </Button>
        <Button
          sx={{
            bgcolor: "#004000",
            width: "100px",
          }}
          variant="contained"
        >
          Register
        </Button> */}
      </Stack>
    </div>
  );
};

export default LoginModal;

// {
//   /* <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleEmailChange} />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={handlePasswordChange} />

//         <button type="submit">Login</button>
//       </form> */
// }
