import React, { useState } from 'react';
import LoaderSpinner from '../../Spinner/Spinner';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

  const [editMode,setEditMode] = useState(false);

  if (!props.profile) {
    return <LoaderSpinner />
  }

  const emptyProfileImage = <img className={s.emptyProfileImage} src='https://img2.reactor.cc/pics/post/The-Witcher-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A6%D0%B8%D1%80%D0%B8-Witcher-%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-5676273.jpeg' alt='empty' />;
  const ProfileImage = <img src={props.profile.photos.large} alt='photoOfUser' />;
  const profileDesc = props.profile.lookingForAJobDescription;
  const 
  {
     fullName, 
     photos, 
     lookingForAJob, 
     lookingForAJobDescription, 
     aboutMe,
     contacts 
    } = props.profile;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit= (formData) =>{
    props.saveProfile(formData)
    .then(() => {setEditMode(false)})
    // setEditMode(false);
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        {photos.large ? ProfileImage : emptyProfileImage}
        <br />
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

        {editMode ? 
          <ProfileDataFormReduxForm 
          initialValues={props.profile}
          profile={props.profile} 
          onSubmit={onSubmit}
          /> : 
        <ProfileData profile={props.profile} isOwner={props.isOwner} goEditForm={() => {setEditMode(true)}}/>}

       
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};


const ProfileData = ({ profile,isOwner,goEditForm }) => {
  return(
    <div>

      {isOwner 
        && 
      <div>
        <button onClick={goEditForm}>Edit</button>
      </div>
      }

      <div>
        <b>fullName :</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a Job :</b>{profile.lookingForAJob ? ' yes' : ' no'}
      </div>
      {
        profile.lookingForAJob && <div> <b>My Prof Skills :</b> {profile.lookingForAJobDescription}</div>
      }
      <div>
        <b>About me :</b> {profile.aboutMe}
      </div>

      <div className={s.profileContacts}>
        <b>Contacts :</b> {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts.key} />
        })
        }
      </div>
    </div>
  )
}



const Contact = ({ contactTitle, contactValue }) => {
  return <div><b>{contactTitle} :</b> {contactValue} </div>
}

export default ProfileInfo;