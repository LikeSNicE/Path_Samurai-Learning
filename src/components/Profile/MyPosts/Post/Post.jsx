import React from 'react';
import s from './Post.module.css';
const Post = ({message,likesCount}) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://cs6.pikabu.ru/avatars/1038/v1038024-550253873.jpg" alt="post" />
      <br></br>
      {message}
      <p>Like : {likesCount}</p>
    </div>
  );
};

export default Post;