// src/pages/Blog.jsx
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        <li><Link to="/blog/1">Post 1</Link></li>
        <li><Link to="/blog/2">Post 2</Link></li>
        <li><Link to="/blog/3">Post 3</Link></li>
      </ul>
    </div>
  );
}
