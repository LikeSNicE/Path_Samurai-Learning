import React from 'react';
import s from './Post.module.scss';


const Post = ({message,likesCount}) => {
  return (
    <div className="message is-medium">
      <div className="message-header">
        Post
      </div>
      <div className="message-body">
        <img
          src="https://cs6.pikabu.ru/avatars/1038/v1038024-550253873.jpg"
          alt="post"
          className={s.postsImage}
        />
        <p>
          {message}
        </p>
        <div className={s.postsLikesCount}>
          Likes : {likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;