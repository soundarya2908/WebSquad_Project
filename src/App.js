import logo from './logo.svg';
import './App.css';
import NavBar from './navbar-component';
import UserProfilePage from './profile/user-profile';
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import userprofileReducer from './profile/userprofile-reducer';
import EditProfile from './edit-profile';
import ProfilePage from './profile';
import editprofileReducer from './edit-profile/editprofile-reducer';
import Search from './search';
import searchReducer from './search/search-reducer';

const store = configureStore(
  {reducer: {userprofile: userprofileReducer, profile: editprofileReducer, donors: searchReducer}});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route index
        element={<NavBar/>}/>
      <Route path="/updateUser/*" element={<EditProfile/>}/>
     <Route path="/userProfile/*" element={<ProfilePage/>}/>
     <Route path="/search/*" element={<Search/>}/>

      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
