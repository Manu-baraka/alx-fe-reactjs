// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/blog">Blog</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}
