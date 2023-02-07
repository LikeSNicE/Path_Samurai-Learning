import React, { Component } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/formControls';
import { validate,maxLength } from '../utils/validation';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} />)
  const messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />)
  let newMessageText = state.newMessageText;

  let addMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  if (!props.isAuth) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addMessage}/>
      </div>
    </div>
  );
};

const maxLength50 = maxLength(50);
const TextArea = Element('textarea')

const addMessagePost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Type your new message' name='newMessageBody' component={TextArea} validate={[validate,maxLength50]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogMessageForm'
})(addMessagePost)

export default Dialogs;