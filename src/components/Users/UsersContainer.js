import React,{Component} from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, 
  toggleFollowingProgress, requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import LoaderSpinner from '../Spinner/Spinner';
import { compose } from 'redux';
import {getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress } from '../../redux/users-selector';

class UsersContainer extends Component{
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render(){
  
    return(
      <div>
          { this.props.isFetching ? <LoaderSpinner/> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state), 
    followingInProgress: getFollowingInProgress(state)
  }
}


export default compose(
  connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
  })
)(UsersContainer)


// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toogleIsFetchingAC(isFetching))
//     }
//   }
// }

