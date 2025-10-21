import { container, fadeIn } from '@/components/animations';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { IoCubeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;
  const iconClass = 'group-hover:stroke-primary text-lg';
  const navLinks = [
    {
      to: '/search',
      icon: <IoSearchOutline className={iconClass} />,
    },
    { to: '/games', label: 'games' },
    { to: '/lists', label: 'lists' },
    { to: '/players', label: 'players' },
    {
      to: '/account',
      icon: <IoPersonOutline className={iconClass} />,
    },
  ];

  return (
    <motion.nav
      className="nav max-xs:flex-col m-auto mt-3 flex max-w-screen-lg py-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="nav__logo max-xs:m-auto max-xs:mb-4 flex items-center"
        variants={fadeIn}
      >
        <NavLink to="/">
          <IoCubeOutline className="stroke-primary text-3xl" />
        </NavLink>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="nav__body max-xs:justify-between flex flex-1 items-center justify-end gap-5 max-[360px]:flex-wrap max-[360px]:gap-2"
      >
        {navLinks.map(({ to, icon, label, i }) => (
          <NavLink
            to={to}
            key={i}
            className={`group w-min min-w-[25px] text-xs tracking-wider whitespace-nowrap max-[360px]:m-auto ${
              icon
                ? 'nav__link--icon max-[360px]:hidden'
                : 'nav__link--non-icon'
            }`}
          >
            {icon ? (
              icon
            ) : (
              <>
                <span
                  className={`${
                    path === to ? 'text-primary' : 'text-transparent'
                  } group-hover:text-primary`}
                >
                  #
                </span>
                {label.toUpperCase()}
              </>
            )}
          </NavLink>
        ))}
      </motion.div>
      <ResponsiveNav iconClass={iconClass} />
    </motion.nav>
  );
}

function ResponsiveNav({ iconClass }) {
  return (
    <div className="mt-3 flex hidden w-full justify-center max-[360px]:flex max-[360px]:gap-4">
      <NavLink to="/home" className="group">
        <IoSearchOutline className={iconClass} />
      </NavLink>
      <NavLink to="/account" className="group">
        <IoPersonOutline className={iconClass} />
      </NavLink>
    </div>
  );
}
