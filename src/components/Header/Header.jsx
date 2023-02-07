

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img src='http://cdn.onlinewebfonts.com/svg/img_176857.png' onClick={() => alert('Hi it is app')} alt='header img'/>

    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>: <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
  </header>
}

export default Header;
