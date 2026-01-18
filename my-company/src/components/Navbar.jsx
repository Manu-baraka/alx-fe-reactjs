import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style ={{ backgroundColor: '#f0f0f0', display : 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
