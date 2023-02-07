import React from 'react';
import { reduxForm } from 'redux-form';
import { CreateField,Element} from '../../common/FormsControls/formControls';
import s from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/formControls.module.css';

const ProfileDataForm = ({profile,handleSubmit,error}) => {

  const Input = Element('input');
  const TextArea = Element('textarea');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>

      {
        error && <div className={styles.formSummaryError}>
          {error}
        </div>
      }
      <div>
        <b>fullName :</b> {CreateField('FullName', 'email', Input, [], null)}
      </div>

      <div>
        <b>Looking for a Job :</b>{profile.lookingForAJob ? ' yes' : ' no'}
        {CreateField('','lookingForAJob',Input,[],{type: 'checkbox'})}
      </div>

      <div>
        <b>My Prof Skills : </b>
        {CreateField('Skills','lookingForAJobDescription',TextArea,[],null)}
      </div>

      <div>
        <b>About me : </b>
        {CreateField('AboutMe', 'AboutMe', TextArea, [], null)}
      </div>

      <div>
        <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
          return (
            <div className={s.contact} key={key}>
              <b>{key} : 
              {CreateField(key ,'contacts.' + key,Input,[])}
              </b>
            </div>
          )
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileDataFormReduxForm;