import { Link } from 'react-router-dom';

import s from './NavbarMenu.module.scss';

import NavbarMenu from 'components/NavbarMenu/NavbarMenu';
import NavBarAuth from 'components/NavBarAuth/NavBarAuth';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <Link to="/">Home</Link>
      <NavbarMenu />
      <NavBarAuth />
    </nav>
  );
};

export default Navbar;
