import { Link } from "react-router-dom";
import "./style.css";

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit
        quisquam accusantium porro at necessitatibus obcaecati unde aliquam ipsa
        laboriosam voluptatem rem laborum, vitae fuga debitis perferendis
        corporis corrupti harum?
      </p>
      <Link to={"/posts/create"} className="btn">
        Criar posts
      </Link>
    </div>
  );
}
