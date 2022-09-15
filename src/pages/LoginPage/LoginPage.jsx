import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';

import s from '../RegisterPage/RegisterPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const onLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.elements['email'].value,
      password: e.currentTarget.elements['password'].value,
    }

    dispatch(login(data));
  }
  
  if(isUserLogin) {
    return <Navigate to='/my-contacts'/>
  }
  
  return (
    <>
      <h1>Login Page</h1>
      <form className={s.form} onSubmit={onLogin}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter user email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter user password (min 7 symbols)"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;