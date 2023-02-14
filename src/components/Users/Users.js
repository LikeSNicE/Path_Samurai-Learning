
import React, { Component } from "react";
import Paginator from "../utils/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
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

