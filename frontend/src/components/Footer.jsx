import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__content">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">Help</NavLink>
        <NavLink to="/">Terms</NavLink>
        <NavLink to="/">Socials</NavLink>
      </div>
      <p className="footer__copyright">Copyright &copy; 2025 Jose Rios</p>
    </footer>
  );
}
