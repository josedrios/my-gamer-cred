import { NavLink } from 'react-router-dom';
import { IoCubeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';

export default function Nav() {
  return (
    <nav>
      <NavLink id="nav-home" to="/">
        <IoCubeOutline />
      </NavLink>
      <div id="nav-body">
        <NavLink className="nav-link" to="/lists">
          <IoSearchOutline />
        </NavLink>
        <NavLink className="nav-link" to="/games">
          GAMES
        </NavLink>
        <NavLink className="nav-link" to="/lists">
          LISTS
        </NavLink>
        <NavLink className="nav-link" to="/players">
          PLAYERS
        </NavLink>
        <NavLink className="nav-link" to="/players">
          <IoPersonOutline />
        </NavLink>
      </div>
    </nav>
  );
}
