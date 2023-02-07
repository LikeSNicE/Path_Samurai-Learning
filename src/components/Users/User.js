
import React, { Component } from "react";
import styles from './users.module.css';
import userPhoto from './../assets/images/user.png';
import { NavLink } from "react-router-dom";
import Paginator from "../utils/Paginator/Paginator";

const User = ({user,followingInProgress, unfollow, follow }) => {

  return (
    <div>
      <div key={user.id} className={styles.userContainer}>
        <div className="left">
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='' className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {
              user.followed ?
                <button
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => {
                    unfollow(user.id)
                  }
                  }>
                  unfollow
                </button>
                :
                <button
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => {
                    follow(user.id)
                  }
                  }>follow
                </button>
            }
          </div>
        </div>
        <div className="right">
          <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;

