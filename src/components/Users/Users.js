
import React, { Component } from "react";
import styles from './users.module.css';
import userPhoto from './../assets/images/user.png';
import { NavLink } from "react-router-dom";
import Paginator from "../utils/Paginator/Paginator";
import User from "./User";

const Users = (props) => {


 let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (  
    <div>
       <Paginator currentPage={props.currentPage} totalItemsCount={props.totalUserCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>

     {
        props.users.map(user =>
          <User user={user}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
            key={user.id}
          />)
      } 
    </div>
  )
}

export default Users;

