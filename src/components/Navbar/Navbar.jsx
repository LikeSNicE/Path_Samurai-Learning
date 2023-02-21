import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import CustomLink from '../CustomLink';
// import { addSideBarActionCreator, onUpdateTextSideBarActionCreator } from '../../redux/sidebar-reducer';
// import Nav from './nav/nav';
// import FriendsList from '../FriendsList/FriendsList';
// import classNames from 'classnames';



const Navbar = (props) => {

    

  return (
    <nav className={s.nav}>
      <div className={s.navItem}>
        <CustomLink to="/profile">Profile</CustomLink>
      </div>
      <div className={s.navItem}>
        <CustomLink to="/dialogs">Dialogs</CustomLink>
      </div>
      <div className={s.navItem}>
        <CustomLink to="/users">Users</CustomLink>
      </div>
    </nav>
  );
}

export default Navbar;

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


     {
       /* <div className={s.friendsItems}>
        <div className={s.friendsItemsLeft}>
          <h1>Friends:</h1>
        </div>
        <div className={s.friendsItemsRight}>
        {FriendsElements}
       </div>
      </div> */
     }

     {
       /* {navbarElements} */
     }

     {
       /* <textarea
        value={newSidebarBody}
        onChange={updateSideBar}
        placeholder='Enter your message'
      />
      <button onClick={addSideBar}>Add text</button> */
     }