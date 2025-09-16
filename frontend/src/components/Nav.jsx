import { motion } from 'motion/react';
import { container, fadeIn } from './animations';
import { NavLink } from 'react-router-dom';
import { IoCubeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <motion.nav variants={container} initial="hidden" animate="show">
      <motion.div id='nav-home-wrapper' variants={fadeIn}>
        <NavLink id="nav-home" to="/">
          <IoCubeOutline />
        </NavLink>
      </motion.div>
      <motion.div variants={fadeIn} id="nav-body">
        <NavLink className="nav-link icon-link" to="/search">
          <IoSearchOutline />
        </NavLink>
        <NavLink className="nav-link non-icon-link" to="/games">
          <span className={path !== '/games' ? `hide` : ``}>#</span>
          GAMES
        </NavLink>
        <NavLink className="nav-link non-icon-link" to="/lists">
          <span className={path !== '/lists' ? `hide` : ``}>#</span>
          LISTS
        </NavLink>
        <NavLink className="nav-link non-icon-link" to="/players">
          <span className={path !== '/players' ? `hide` : ``}>#</span>
          PLAYERS
        </NavLink>
        <NavLink className="nav-link icon-link" to="/account">
          <IoPersonOutline />
        </NavLink>
        <div id="responsive-icon-container">
          <NavLink className="nav-link" to="/home">
            <IoSearchOutline />
          </NavLink>
          <NavLink className="nav-link" to="/account">
            <IoPersonOutline />
          </NavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
}
