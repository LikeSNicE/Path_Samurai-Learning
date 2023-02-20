import React, { Component } from "react";
import styles from "./users.module.scss";
import userPhoto from "./../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.user + " " + "message is-medium"}>
      <div className="message-header">User name : {user.name}</div>
      <div className="message-body">
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt=""
            className={styles.userPhoto}
          />
        </NavLink>

        <p className="title is-4">User Name : {user.name}</p>

        <p className="title is-4">Status : {user.status ? user.status : 'no status'}</p>

        <div className={styles.userFollow}>
          {user.followed ? (
            <button
              className={"button is-danger"}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              className={"button is-success"}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </div>
    // <div className={styles.user}>
    //   <div key={user.id} className={styles.userContainer}>
    //     <div className="left">
    //       <div>
    //         <NavLink to={"/profile/" + user.id}>
    //           <img
    //             src={user.photos.small !== null ? user.photos.small : userPhoto}
    //             alt=""
    //             className={styles.userPhoto}
    //           />
    //         </NavLink>
    //       </div>
    //       <div>
    //         {user.followed ? (
    //           <button
    //             className={"button is-danger"}
    //             disabled={followingInProgress.some((id) => id === user.id)}
    //             onClick={() => {
    //               unfollow(user.id);
    //             }}
    //           >
    //             unfollow
    //           </button>
    //         ) : (
    //           <button
    //             className={"button is-success"}
    //             disabled={followingInProgress.some((id) => id === user.id)}
    //             onClick={() => {
    //               follow(user.id);
    //             }}
    //           >
    //             follow
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //     <div className="right">
    //       <div>
    //         <div>{user.name}</div>
    //         <div>{user.status}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default User;
