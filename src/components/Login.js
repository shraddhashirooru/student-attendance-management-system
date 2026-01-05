import { useState } from "react";

export default function Login({ onLogin }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  const login = () => {
    if (u === "admin" && p === "admin") onLogin();
    else setErr("Invalid credentials");
  };

  return (
    <div className="panel">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setU(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} />
      <button onClick={login}>Login</button>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
}
