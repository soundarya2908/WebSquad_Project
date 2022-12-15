import './App.css';
import React, { Fragment, useState } from 'react';
import HomePage from './home-component/index.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import ProfilePage from './profile-component';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import donorReducer from './reducers/donor-reducer';
import DonorList from './donor-list-component';
import NavBar from './navbar-component';
import DonorDetails from './donor-details';
import EditUserProfile from './editprofile-component/user-editprofile';
import Search from './search';
import SearchResults from './search/searchresults';
import userprofileReducer from './reducers/userprofile-reducer';
import editprofileReducer from './reducers/editprofile-reducer';
import searchReducer from './reducers/search-reducer';
import previousorderReducer from './reducers/previousorder-reducer';
import PreviousOrders from './profile-component/previous-orders';
import UserProfilePrivatePage from './profile-component/userprofile-private';
import userReducer from './users/user-reducer';
import orderReducer from './reducers/order-reducer';
import AdminPage from './admin';
import Login from './login-register-component/login-component';
import Register from './login-register-component/register-component';

const store = configureStore({
  reducer: {
    donorsData: donorReducer,
    users: userReducer,
    userprofile: userprofileReducer,
    profile: editprofileReducer,
    donors: searchReducer,
    orders: previousorderReducer,
  },
});

function App() {
  // const {users} = useSelector((state) => state.users)
  // done
  const [user, setUser] = useState(false);
  const updateUser = (user) => {
    setUser(user);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar userState={user} />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<HomePage updateUser={updateUser} userState={user} />}
            />
            <Route
              path="/login"
              element={<Login updateUser={updateUser} userState={user} />}
            />
            <Route path="/register" element={<Register />} />
            {store.getState().users && (
              <Fragment>
                <Route
                  path="/profile/*"
                  element={
                    <ProfilePage updateUser={updateUser} userState={user} />
                  }
                />
                <Route
                  path="/home"
                  element={
                    <DonorList
                      status={'Approved'}
                      updateUser={updateUser}
                      userState={user}
                    />
                  }
                />
                <Route path="/updateUser" element={<EditUserProfile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/searchresults" element={<SearchResults />} />
                <Route
                  path="/donor/*"
                  element={
                    <DonorDetails updateUser={updateUser} userState={user} />
                  }
                />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/order/*" element={<PreviousOrders />} />
                <Route
                  path="/privateuser"
                  element={<UserProfilePrivatePage />}
                />
              </Fragment>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
