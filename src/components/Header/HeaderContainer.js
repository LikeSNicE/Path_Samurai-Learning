
import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends Component {

  render(){
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login, 
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {logout})(HeaderContainer);
