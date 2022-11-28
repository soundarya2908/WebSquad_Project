import logo from './logo.svg';
import './App.css';
import NavBar from './navbar-component';
import UserProfilePage from './profile/user-profile';
import EditUserProfile from './edit-profile/user-editprofile';

function App() {
  return (
    <div className="App">
      {/* <h1>Web Squad!</h1> */}
      <NavBar/>
      <EditUserProfile/>
    </div>
  );
}

export default App;
