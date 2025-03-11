import { useState } from "react";

function ERegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    citizenship: "",
  });

  const [message, setMessage] = useState("");
  const [registrations, setRegistrations] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrations([...registrations, { ...formData, status: "Pending" }]);
    setMessage("Thank you for registering!");
    setFormData({ name: "", email: "", age: "", citizenship: "" });
  };

  return (
    <div style={{ height: "1000px" }}>
      <h2>Voter E-Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="citizenship"
          placeholder="Citizenship Number"
          value={formData.citizenship}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ERegistration;
