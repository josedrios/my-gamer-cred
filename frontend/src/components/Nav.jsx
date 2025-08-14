import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div id="nav-header">
        <div id="nav-header-bg" />
        {/* MAKE IT WHEN CLICKED, OVERLAY FOR SIGN/LOG??? */}
        {/* and if logged, go to account page*/}
        <NavLink id="nav-account-link" to="/account">
          ACCOUNT?
        </NavLink>
      </div>
      <div id="nav-main">
        <NavLink className="button nav-button" to="/">
          HOME
        </NavLink>
        <NavLink className="button nav-button" to="/games">
          GAMES
        </NavLink>
        <NavLink className="button nav-button" to="/players">
          PLAYERS
        </NavLink>
        <NavLink className="button nav-button" to="/about">
          ABOUT
        </NavLink>
      </div>
      {/* <NavLink className="button" to='/design'>
        DESIGN
      </NavLink> */}
    </nav>
  );
}
