import "./style.css";

import { useState, useEffect } from "react";

export default function Register() {
  return (
    <div className="register">
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form >
        <label>
          <input
            type="text"
            name="name"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
