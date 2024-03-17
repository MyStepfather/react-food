import {Link} from "react-router-dom";

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link
              to="/about/*"
              rel="noreferrer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
                to="/contact/*"
                rel="noreferrer"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
