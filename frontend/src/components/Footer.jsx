import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div id="footer-content">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">Help</NavLink>
        <NavLink to="/">Terms</NavLink>
        <NavLink to="/">Socials</NavLink>
      </div>
      <p id="footer-copyright">Copyright &copy; 2025 Jose Rios</p>
    </footer>
  );
}
