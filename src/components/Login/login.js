import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, stopSubmit } from "redux-form";
import { Element, Input } from "../common/FormsControls/formControls";
import { maxLength, validate } from "../utils/validation";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from './../common/FormsControls/formControls.module.css';
import { CreateField } from "../common/FormsControls/formControls";

const LoginForm = ({handleSubmit,error}) => {
  //const maxLength25 = maxLength(25);
  const Input = Element('input')
  return (
    <form onSubmit={handleSubmit}>
      {CreateField('Email','email',Input,validate,null)}
      {CreateField('Password', 'password', Input, validate, { type: 'password' })}
      {CreateField('Input', 'rememberMe', Input, validate, { type: 'checkbox'},'remember me')}
      { 
        error && <div className={styles.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = ({email,password,rememberMe}) => {
    props.login(email, password,rememberMe)
  }

  if(props.isAuth){
    return <Navigate to={'/profile'}/>
  }else{
   
  }

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,{login})(Login);