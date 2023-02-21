import React from 'react';
import { reduxForm } from 'redux-form';
import { CreateField,Element} from '../../common/FormsControls/formControls';
import s from './ProfileInfo.module.scss';
import styles from '../../common/FormsControls/formControls.module.scss';

const ProfileDataForm = ({profile,handleSubmit,error}) => {

  const Input = Element('input');
  const TextArea = Element('textarea');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button className={s.profileDataBtn} onClick={() => {}}>
          Save
        </button>
      </div>

      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <b className={s.profileDataEditTitle}>fullName :</b>{" "}
        {CreateField("FullName", "fullName", Input, [], {
          className: "input",
        })}
      </div>

      <div>
        <b>Looking for a Job :</b>
        {profile.lookingForAJob ? " yes" : " no"}
        {CreateField("", "lookingForAJob", Input, [], { type: "checkbox" })}
      </div>

      <div>
        <b className={s.profileDataEditTitle}>My Prof Skills : </b>
        {CreateField("Skills", "lookingForAJobDescription", TextArea, [], {
          className: "textarea",
        })}
      </div>

      <div>
        <b className={s.profileDataEditTitle}>About me : </b>
        {CreateField("AboutMe", "aboutMe", TextArea, [], {
          className: "textarea",
        })}
      </div>

      <div className={s.contact}>
        <b className={s.contactTitle}>Contacts : </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b className={s.contactSubtitle}>
                {key} :
                {CreateField(key, "contacts." + key, Input, [], {
                  className: "input",
                })}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileDataReduxForm;