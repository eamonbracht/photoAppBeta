import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // FUTURE ME WILL MAKE THIS DO SOMETHING
    console.log("Email:", email, "Message:", message);
    navigate("/about"); // Redirect this to a thank-you page or something cute
  };

  return (
    <section style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "100%", padding: "8px", height: "100px" }}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
