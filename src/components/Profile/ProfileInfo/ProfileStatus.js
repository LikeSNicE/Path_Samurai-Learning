import React,{useState,useEffect} from 'react';
import './ProfileStatus.css'



const ProfileStatus = (props) => {
  const [title,setTitle] = useState(props.status);
  const [editMode,setEditMode] = useState(false);

  useEffect(() => {
    setTitle(props.status)
  },[props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    props.updateStatus(title)
    setEditMode(false)
  }

  const onStatusChange = (e) => {
    setTitle(e.currentTarget.value);
  }

  return(
    <div className='profile-status-wrap'>
      {
        editMode ? 
          <input autoFocus onBlur={deactivateEditMode} value={title} onChange={onStatusChange} /> :
          <div>
            <b>Status : </b> <span onDoubleClick={activateEditMode}>{title || 'no status'}</span>  
          </div>
      }
    </div>
  )
}

export default ProfileStatus;
