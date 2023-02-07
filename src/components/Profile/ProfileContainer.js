// import React, { Component } from 'react';
// import Profile from './Profile';
// import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer';
// import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// export function withRouter(Children) {
//   return (props) => {
//     const match = { params: useParams() }
//     return <Children{...props} match={match} />
//   }
// }

// class ProfileContainer extends Component {

//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = this.props.authorizedUserId;
//     }
//     this.props.getUserProfile(userId)
//     this.props.getUserStatus(userId)
//   }

//   render() {

//     return (
//       <div>
//         <Profile {...this.props}
//           profile={this.props.profile}
//           status={this.props.status}
//           updateStatus={this.props.updateStatus}
//         />
//       </div>
//     )
//   }
// }

// let mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   status: state.profilePage.status,
//   authorizedUserId: state.auth.id,
//   isAuth: state.auth.isAuth
// });

// export default compose(
//   connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
//   withRouter,
//   withAuthRedirect
// )(ProfileContainer)  


import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { Navigate } from "react-router-dom";


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMyProfile: true
    }
  }


  componentDidMount() {

    let userIdFromPath = +this.props.router.params.userId;
    let authorizedUserId = this.props.authorizedUserId;

    if (userIdFromPath) {

      this.props.getUserProfile(userIdFromPath);
      this.props.getUserStatus(userIdFromPath);

    } else {

      if (this.props.isAuth) {
        this.props.getUserProfile(authorizedUserId);
        this.props.getUserStatus(authorizedUserId);
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    let userIdFromPath = +this.props.router.params.userId;
    let authorizedUserId = this.props.authorizedUserId;
    let isShowMyProfile = this.state.isShowMyProfile;

    if (isShowMyProfile) {

      if (userIdFromPath === authorizedUserId) {
        this.setState({ isShowMyProfile: false })
      }

      if (!userIdFromPath && this.props.isAuth) {
        this.props.getUserProfile(authorizedUserId);
        this.props.getUserStatus(authorizedUserId);
        this.setState({ isShowMyProfile: false })
      }
    }
  }

  render() {

    if (!this.props.isAuth && !this.props.router.params.userId) {
      return <Navigate to={'/login'} />
    }

    return (
      <div>
        <Profile {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          isOwner={!+this.props.router.params.userId}
          savePhoto={this.props.savePhoto}
          // saveProfile={this.props.saveProfile}
        />
      </div>
    )
  }
}


// wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
export function withRouter(Component) {

  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component
      {...props}
      router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
})


const ProfileContainerCompose = compose(
  withRouter,
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile })
)(ProfileContainer);

export default ProfileContainerCompose;