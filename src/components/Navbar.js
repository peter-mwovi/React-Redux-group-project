import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';
import Logo from './Logo';

const Navbar = () => {
//  nav object array here
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__content}>
          <Logo />
          <ul className={styles.navbar__list}>
            {navlinks.map((navlink) => (
              <li key={navlink.text}>
                <NavLink
                  to={navlink.path}
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : '',
                  })}
                >
                  {navlink.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
