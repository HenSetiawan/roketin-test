import './css/App.css';
import HeaderComponent from './components/HeaderComponent';
import Profile from './components/Profile';
import { useState, useEffect } from 'react';
import userService from './service/user-service';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getNationality().then((nationality) => {
      console.log(nationality);
    });
    userService.getAllUsers().then((users) => {
      setUsers(users);
      console.log(users.results);
    });
  }, []);

  return (
    <div className="App container">
      <HeaderComponent />
      <div className="list-user">
        {users.results &&
          users.results.map((user) => {
            return (
              <Profile
                name={user.name.first}
                image={user.picture.medium}
                email={user.email}
                age={user.dob.age}
                gender={user.gender}
                nationality={user.nat}
                address={user.location.state + ', ' + user.location.city}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
