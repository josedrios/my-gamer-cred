import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink className="button" to='/'>
        HOME
      </NavLink>
      <NavLink className="button" to='/search'>
        SEARCH
      </NavLink>
      <NavLink className="button" to='/about'>
        ABOUT
      </NavLink>
      <NavLink className="button" to='/account'>
        ACCOUNT
      </NavLink>
      {/* <NavLink className="button" to='/design'>
        DESIGN
      </NavLink> */}
    </nav>
  );
}
