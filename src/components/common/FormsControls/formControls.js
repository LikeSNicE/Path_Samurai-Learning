import React from "react";
import styles from './formControls.module.scss'
import { Field } from "redux-form";


export const Element = Element => ({ input, meta: {touched,error}, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControls + " " + (hasError ? styles.error : '')}>
      <Element {...input} {...props} />
      {hasError && <span>{'some error'}</span>}
    </div>
  )
}

export const CreateField = (placeholder,name,component,validate,props = {}, text='') => {
  return(
    <div>
      <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/> {text}
    </div>
  )
}