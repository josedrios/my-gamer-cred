import { NavLink } from 'react-router-dom';
import { IoCubeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;
  const navLinks = [
    {
      to: '/search',
      icon: <IoSearchOutline />,
    },
    { to: '/games', label: 'games' },
    { to: '/lists', label: 'lists' },
    { to: '/players', label: 'players' },
    {
      to: '/account',
      icon: <IoPersonOutline />,
    },
  ];

  return (
    <nav
      className="nav"
    >
      <div className="nav__logo" >
        <NavLink to="/">
          <IoCubeOutline />
        </NavLink>
      </div>

      <div className="nav__body">
        {navLinks.map(({ to, icon, label, i }) => (
          <NavLink
            to={to}
            key={i}
            className={`nav__link ${
              icon ? 'nav__link--icon' : 'nav__link--non-icon'
            }`}
          >
            {icon ? (
              icon
            ) : (
              <>
                <span
                  className={
                    path === to ? 'visible-nav-link' : 'invisible-nav-link'
                  }
                >
                  #
                </span>
                {label.toUpperCase()}
              </>
            )}
          </NavLink>
        ))}
      </div>
      <ResponsiveNav />
    </nav>
  );
}

function ResponsiveNav() {
  return (
    <div className="nav__responsive-body max-[360px]:gap-4">
      <NavLink to="/home" className="group">
        <IoSearchOutline className={'nav__link-icon'} />
      </NavLink>
      <NavLink to="/account" className="group">
        <IoPersonOutline className={'nav__link-icon'} />
      </NavLink>
    </div>
  );
}
