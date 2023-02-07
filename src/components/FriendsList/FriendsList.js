import React from 'react';
import { NavLink } from 'react-router-dom';

const FriendsList = ({name,id}) => {
  return (
    <div>
      <img src='https://avatars.cloudflare.steamstatic.com/1827440da7b3df4ee396cab2e84d006b6bc5355a_medium.jpg' alt='navPhoto'/>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default FriendsList;