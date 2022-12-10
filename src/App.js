import './App.css';
import NavBar from './navbar-component';
import LoginRegister from './login-register-component';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from './users/user-reducer';
import Maps from './map-component';

const store = configureStore({
  reducer: {
      users: userReducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1>Web Squad!</h1> */}
        <NavBar/>
        <LoginRegister/>
        <Maps/>
      </div>
    </Provider>
  );
}

export default App;
