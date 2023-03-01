import React, { useState } from "react";
import "./registeration.css";
import axios from "axios";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [DateOfBirth, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const data = { name, DateOfBirth, email, password };
    console.log(data);

    axios
      .post("https://quantum-backend-kw19l296s-abdul-kmc.vercel.app/api/user", data)
      .then((response) => {
        console.log(response);
         event.target.reset();

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <div className="main_container">
        <h1 id="Reg">Registration</h1>

        <form onSubmit={handleSubmit}>
          <label id="name">
            Name:
            <input
              className="background"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <br />

          <label id="DateOfBirth">
            DateOfBirth:
            <input
              className="background"
              type="date"
              value={DateOfBirth}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>

          <br />

          <label id="email">
            Email:
            <input
              className="background"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <br />

          <label id="passward">
            Password:
            <input
              className="background"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <br />

          <button id="registrer_btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;