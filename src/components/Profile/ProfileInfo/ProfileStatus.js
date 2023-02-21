import React,{useState,useEffect} from 'react';
import './ProfileStatus.scss'



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

  const onKeyChange = (e) => {
    if (e.key === "Enter") {
      props.updateStatus(title);
      setEditMode(false);
    }
  }

  return (
    <div className="profile-status-wrap">
      {editMode ? (
        <div>
          <input
            className="input"
            autoFocus
            onBlur={deactivateEditMode}
            value={title}
            onChange={onStatusChange}
            onKeyDown={onKeyChange}
          />
          <button className='button' onClick={onStatusChange}>Add status</button>
        </div>
      ) : (
        <div>
          <b>Status : </b>{" "}
          <span onDoubleClick={activateEditMode}>{title || "no status"}</span>
          <br/>
          <button className='button' onClick={activateEditMode}>
            Edit Status
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
