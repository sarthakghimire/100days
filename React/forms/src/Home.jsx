import React from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState();
  const [display, setDisplay] = useState();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setDisplay(() => user);
  };

  return (
    <>
      <form action="#" onSubmit={handleForm}>
        <input type="text" name="email" placeholder="Enter e-mail" />

        <input name="password" type="password" placeholder="******" />

        <input type="submit" value="Login" />
      </form>

      {JSON.stringify(display)}
    </>
  );
};

export default Home;
