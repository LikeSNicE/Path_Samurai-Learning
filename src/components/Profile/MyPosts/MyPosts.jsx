import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field,reduxForm } from 'redux-form';
import { validate,maxLength } from '../../utils/validation';
import { Element } from '../../common/FormsControls/formControls';


const MyPosts = React.memo(props => {

  const postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.addNewPostProfile)
  }

  return (
    <div className={s.postsBlock} >
      <h3>My posts</h3>
      <AddNewPostProfileReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});

const maxLength10 = maxLength(10);
const TextArea = Element('textarea')

const addNewPostProfile = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        name={'addNewPostProfile'} 
        placeholder='Wanna see? Just write a new Post' 
        // component={'textarea'}
        component={TextArea}
        validate={[validate,maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostProfileReduxForm = reduxForm({
  form: 'profilePostForm'
})(addNewPostProfile)

export default MyPosts;