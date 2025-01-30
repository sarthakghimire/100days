import { useState } from "react";
import axios from "axios";

const CheckStatus = () => {
  const [voterId, setVoterId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const checkVoterStatus = async () => {
    if (!voterId) {
      setError("Voter ID is required.");
      return;
    }

    try {
      setError("");
      setStatus(null);

      const response = await axios.get("http://localhost:5000/search", {
        params: { voterId },
      });

      if (response.data.status === "approved") {
        setStatus(`✅ Approved: ${response.data.data.name}`);
      } else if (response.data.status === "pending") {
        setStatus(`⏳ Pending: ${response.data.data.name}`);
      } else {
        setStatus("❌ Voter ID not found.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", height: "1000px" }}>
      <h2>Check Voter Status</h2>
      <input
        type="text"
        placeholder="Enter Voter ID"
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
    </div>
  );
};

export default CheckStatus;
