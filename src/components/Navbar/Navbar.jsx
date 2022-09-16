import { Link } from 'react-router-dom';

import s from './NavbarMenu.module.scss';

import useAuth from 'components/shared/hooks/useAuth';

import NavbarMenu from 'components/NavbarMenu/NavbarMenu';
import NavBarAuth from 'components/NavBarAuth/NavBarAuth';
import NavBarUser from 'components/UserMenu/UserMenu';

const Navbar = () => {
  const isUserLogin = useAuth();
  return (
    <nav className={s.nav}>
      <Link to="/">Home</Link>
      {isUserLogin && <NavbarMenu />}
      {isUserLogin ? <NavBarUser /> : <NavBarAuth />}
    </nav>
  );
};

export default Navbar;
