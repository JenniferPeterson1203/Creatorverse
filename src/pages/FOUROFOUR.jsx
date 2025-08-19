// FOUROFOUR.jsx
import { Link } from "react-router-dom";

const FOUROFOUR = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Full height of screen
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Big 404 number */}
      <h1 style={{ fontSize: "8rem", margin: "0", color: "#007bff" }}>404</h1>

      {/* Error message */}
      <h2 style={{ margin: "10px 0", fontSize: "2rem" }}>
        Page Not Found
      </h2>

      <p style={{ maxWidth: "400px", marginBottom: "30px", color: "#666" }}>
        Oops! The page you are looking for does not exist, has been removed, or
        is temporarily unavailable.
      </p>

      {/* Link back to homepage */}
      <Link
        to="/"
        style={{
          padding: "12px 24px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default FOUROFOUR;
