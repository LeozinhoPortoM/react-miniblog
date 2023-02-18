import "./style.css";

import { Link } from "react-router-dom";

export default function PostDetail({ post }) {
  return (
    <div className="post_detail">
      <img src={post.image} alt={post.title} />
      <div className="post_detail__info">
        <h2>{post.title}</h2>
        <p className="createdby">{post.createdBy}</p>
        <div className="tags">
          {post.tags.map((tag, i) => (
            <p key={i}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">
          Ler
        </Link>
      </div>
    </div>
  );
}
