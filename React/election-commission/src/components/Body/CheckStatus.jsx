import { useState } from "react";
import axios from "axios";

const VoterCard = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        marginTop: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <img src="" alt="" />
      <p>Election Commission of Nepal</p>
      <p>Voter Card</p>
      <img
        src={user.image}
        alt="Voter"
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Sex:</strong> {user.gender}
      </p>
      <p>
        <strong>DOB:</strong> {user.birthDate}
      </p>
      <p>
        <strong>Voter ID:</strong> {user.id}
      </p>
    </div>
  );
};

const CheckStatus = () => {
  const [voterId, setVoterId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const checkVoterStatus = async () => {
    const id = parseInt(voterId);
    if (!id || id < 1) {
      setError("Valid Voter ID is required.");
      return;
    }

    try {
      setError("");
      setStatus(null);
      setUserData(null);

      const response = await axios.get("https://dummyjson.com/users/" + id);
      const user = response.data;
      let voterStatus = "";

      if (id >= 1 && id <= 15) {
        voterStatus = `✅ Approved: ${user.firstName} ${user.lastName}`;
        setUserData(user);
      } else if (id >= 16 && id <= 30) {
        voterStatus = `❌ Rejected: ${user.firstName} ${user.lastName}`;
      } else {
        voterStatus = `⏳ Pending: ${user.firstName} ${user.lastName}`;
      }

      setStatus(voterStatus);
    } catch (err) {
      setError("Voter ID not found. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", height: "1000px" }}>
      <h2>Check Voter Status</h2>
      <input
        type="number"
        placeholder="Enter Citizenship Number"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={checkVoterStatus} style={{ padding: "10px 15px" }}>
        Check Status
      </button>

      {status && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{status}</p>
      )}
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
      {userData && <VoterCard user={userData} />}
    </div>
  );
};

export default CheckStatus;
