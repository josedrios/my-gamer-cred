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
      className="nav flex py-3 m-auto mt-3 max-w-screen-lg max-xs:flex-col"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="nav__logo flex items-center max-xs:m-auto max-xs:mb-4"
        variants={fadeIn}
      >
        <NavLink to="/">
          <IoCubeOutline className="text-3xl stroke-primary" />
        </NavLink>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="nav__body flex justify-end items-center gap-5 flex-1 max-xs:justify-between max-[360px]:flex-wrap max-[360px]:gap-2"
      >
        {navLinks.map(({ to, icon, label, key }) => (
          <NavLink
            to={to}
            key={key}
            className={`group text-xs tracking-wider w-min min-w-[25px] whitespace-nowrap max-[360px]:m-auto ${
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
    <div className="hidden w-full flex mt-3 justify-center max-[360px]:flex max-[360px]:gap-4 ">
      <NavLink to="/home" className="group">
        <IoSearchOutline className={iconClass} />
      </NavLink>
      <NavLink to="/account" className="group">
        <IoPersonOutline className={iconClass} />
      </NavLink>
    </div>
  );
}
