import { useSelector, useDispatch } from "react-redux"

import { logout } from "redux/auth/auth-operations";

import { getUser } from "redux/auth/auth-selectors"

import s from './UserMenu.module.scss';

const UserMenu = () => {
    const {email} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());

    return (<p>{email}<button className={s.btn} type='button' onClick={onLogout}>Logout</button></p>)
}

export default UserMenu;