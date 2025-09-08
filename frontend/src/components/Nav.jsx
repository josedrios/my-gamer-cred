import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
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
        <NavLink className="button nav-button" to="/lists">
          Lists
        </NavLink>
      </div>
    </nav>
  );
}
