import { NavLink } from 'react-router-dom';

import s from './NavBarAuth.module.scss';

const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register"  className={s.link}>register</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default NavBarAuth;