import "./style.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <div className="create_post">
      <h2>Criar post</h2>
      <p>Escreva o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>Título:</span>
        </label>
        <label>
          <input
            type="text"
            name="image"
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <span>Url da imagem:</span>
        </label>
        <label>
          <textarea
            name="body"
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <span>Conteúdo:</span>
        </label>
        <label>
          <input
            type="text"
            name="tags"
            value={tags}
            required
            onChange={(e) => setTags(e.target.value)}
          />
          <span>Tags:</span>
        </label>
        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
