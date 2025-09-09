import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div id='nav-container'>
        <NavLink id="nav-home" to="/">
          <img className="pixel-art" src="/images/gc.png" alt="" />
          <h1>MYGAMERCRED</h1>
        </NavLink>
        <div id="nav-body">
          <NavLink className="nav-link" to="/games">
            GAMES
          </NavLink>
          <NavLink className="nav-link" to="/lists">
            LISTS
          </NavLink>
          <NavLink className="nav-link" to="/players">
            PLAYERS
          </NavLink>
          <NavLink className="nav-link" to="/lists">
            SIGN UP
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
