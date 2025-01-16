import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState();
  const [display, setDisplay] = useState();

  const handelInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setDisplay(() => user);
  };

  const handleShow = (status) => {
    setUser((prev) => ({ ...prev, show: status }));
  };

  return (
    <>
      <form onSubmit={handleForm} action="#">
        <input
          name="email"
          type="text"
          placeholder="enter email"
          onChange={(e) => handelInput(e)}
        />

        <div className="" style={{ position: "relative" }}>
          <input
            name="password"
            type={user?.show ? "text" : "password"}
            placeholder="**********"
            onChange={(e) => handelInput(e)}
          />

          {user?.show ? (
            <Eye onClick={() => handleShow(false)} />
          ) : (
            <EyeOff onClick={() => handleShow(true)} />
          )}
        </div>

        <input type="submit" value="Login" />
      </form>

      {JSON.stringify(display)}
    </>
  );
};

export default Home;
