import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id,img}) => {
  return (
    <div className={s.dialog}>
      <img src={img} alt="post" />
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;