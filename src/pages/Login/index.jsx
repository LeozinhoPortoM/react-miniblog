import "./style.css";

import { useState, useEffect } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = { email, password };

    const res = await login(user);

    console.log(res);

    handleClear();
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <h1>Entrar</h1>
      <p>Faça o login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>E-mail:</span>
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Senha:</span>
        </label>

        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
