
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from './redux/usersSlice';
import UserCard from './components/UserCard';
import UserDetails from './components/UserDetails';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div className="App">
      <h1>User List</h1>
      <div className="user-list">
        {users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
      </div>
      <hr />
      <UserDetails />
    </div>
  );
}

export default App;
