import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';

import s from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const onRegister = (e) => {
    e.preventDefault();
    const data = {
      name: e.currentTarget.elements['name'].value,
      email: e.currentTarget.elements['email'].value,
      password: e.currentTarget.elements['password'].value,
    }

    dispatch(signup(data));
  }
  
  if(isUserLogin) {
    return <Navigate to='/my-contacts'/>
  }
  
  return (
    <>
      <h1>Register Page</h1>
      <form className={s.form} onSubmit={onRegister}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter user name"
            required
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
