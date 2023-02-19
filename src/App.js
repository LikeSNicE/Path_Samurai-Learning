import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music';
import Settings from './components/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from './components/Profile/ProfileContainer';
import LoaderSpinner from './components/Spinner/Spinner';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component{

  componentDidMount() {
    this.props.initializeApp()
  }

  render(){
    if(!this.props.initialized) return <LoaderSpinner/>
    
     return (
    <div className='app-wrapper'>
      <HeaderContainer />
      {/* <Navbar/> */}
      <div className="app-wrapper-content container">
      <Navbar/>
      <div className='app-right-side'>
        <Suspense fallback={<LoaderSpinner/>}>
             <Routes>            
               <Route path="/profile" element={<ProfileContainer />}>
                 <Route path=":userId" element={<ProfileContainer />} />
               </Route>
               <Route path='/dialogs/*'
                 element={
                  <DialogsContainer/>
                 }></Route>
               <Route path='/users/*' element={<UsersContainer />} />
               <Route path='/news' element={<News />} />
               <Route path='/music' element={<Music />} />
               <Route path='/settings' element={<Settings />} />
               <Route path='/login' element={<Login />} />
             </Routes>
      </Suspense>
      </div>
      </div>
    </div>
  );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)