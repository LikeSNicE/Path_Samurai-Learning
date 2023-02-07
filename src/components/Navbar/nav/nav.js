import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ name, id }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}

export default Nav;