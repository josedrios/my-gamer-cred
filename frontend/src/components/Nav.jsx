import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink className="standard-button" to='/'>
        HOME
      </NavLink>
      <NavLink className="standard-button" to=''>
        SEARCH
      </NavLink>
      <NavLink className="standard-button" to='/about'>
        ABOUT
      </NavLink>
      <NavLink className="standard-button" to=''>
        ACCOUNT
      </NavLink>
    </nav>
  );
}
