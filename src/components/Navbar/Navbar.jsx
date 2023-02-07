import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import { addSideBarActionCreator, onUpdateTextSideBarActionCreator } from '../../redux/sidebar-reducer';
import Nav from './nav/nav';
// import FriendsList from '../FriendsList/FriendsList';



const Navbar = (props) => {

  // let state = props.store.getState().sidebar;


  // const navbarElements = state.sides.map(
  //   el => <Nav name={el.sidebar} id={el.id}/>
  // )
  // let newSidebarBody = state.newSidebarBody;

  // const addSideBar = () => {
  //   props.store.dispatch(addSideBarActionCreator())
  // }

  // const updateSideBar = (e) => {
  //   let body = e.target.value
  //   props.store.dispatch(onUpdateTextSideBarActionCreator(body))
  // }

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile'
        className={({isActive}) => isActive ? s.active : s.item}>
        Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.active : s.item}>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' className={({ isActive }) => isActive ? s.active : s.item}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings'>Setting</NavLink>
      </div>
      {/* <div className={s.friendsItems}>
        <div className={s.friendsItemsLeft}>
          <h1>Friends:</h1>
        </div>
        <div className={s.friendsItemsRight}>
        {FriendsElements}
       </div>
      </div> */}


      {/* {navbarElements} */}


      {/* <textarea
        value={newSidebarBody}
        onChange={updateSideBar}
        placeholder='Enter your message'
      />
      <button onClick={addSideBar}>Add text</button> */}
    </nav>
  )
}

export default Navbar;