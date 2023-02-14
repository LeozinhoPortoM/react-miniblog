import "./style.css";

import { useState, useEffect } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

export default function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = { displayName, email, password, confirmPassword };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);

    handleClear();
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const handleClear = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="register">
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
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
