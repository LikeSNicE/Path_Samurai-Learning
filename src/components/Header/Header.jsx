

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  // return <header className={s.header}>
  //   <img src='http://cdn.onlinewebfonts.com/svg/img_176857.png' onClick={() => alert('Hi it is app')} alt='header img'/>

  //   {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>: <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
  // </header>
  return <section className="hero is-link header">
      <div className="hero-head">
        <nav className="navbar container">
          <div className="navbar-brand">
            <Link className="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                {props.isAuth ? <div className="is-flex">
                    <div class="navbar-item">{props.login}</div>
                    <button className="button is-link is-inverted" onClick={props.logout}>
                      <span>Log Out</span>
                    </button>
                  </div> : <div>
                    <Link to={"/login"}>Login</Link>
                  </div>}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>;
}

export default Header;
