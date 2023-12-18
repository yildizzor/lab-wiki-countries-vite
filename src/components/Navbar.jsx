import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <ul>
        <NavLink to="/" className="navbar-brand">
          WikiCountries
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
