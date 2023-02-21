import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, stopSubmit } from "redux-form";
import { Element, Input } from "../common/FormsControls/formControls";
import { maxLength, validate,required } from "../utils/validation";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from './../common/FormsControls/formControls.module.scss';
import { CreateField } from "../common/FormsControls/formControls";
 import stylesLogin from './login.module.scss';

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
  const Input = Element('input')
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Email", "email", Input, validate, {
        className: "input",
        placeholder: "email",
      })}
      {CreateField("Password", "password", Input, validate, {
        type: "password",
        className: "input mt-2",
        placeholder: "password",
      })}
      {CreateField(
        "Input",
        "rememberMe",
        Input,
        validate,
        { type: "checkbox",
          className: 'checkbox mt-4'
        },
        "remember me"
      )}

      {/* {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        CreateField("Symbols from image", "captcha", Input, validate, {})} */}

      {error && <div className={styles.formSummaryError}>{error}</div>}
      
      <div>
        <button className="button">Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = ({email,password,rememberMe,captcha}) => {
    props.login(email, password,rememberMe,captcha)
  }

  if(props.isAuth){
    return <Navigate to={'/profile'}/>
  }else{
   
  }

  return(
    <div className={stylesLogin.login}>
      <h1 className="title my-2">Login Page</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps,{login})(Login);