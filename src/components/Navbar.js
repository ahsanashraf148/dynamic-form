import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <Link to="/customer" style={{ color: 'inherit', textDecoration: 'inherit'}}>Customer</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/business" style={{ color: 'inherit', textDecoration: 'inherit'}}>Business</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;