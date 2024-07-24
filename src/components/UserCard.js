import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from '../redux/usersSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(selectUser(user));
        // здесь можно перейти на новую страницу с полной информацией
    };

    return (
        <div className="user-card" onClick={handleClick}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};

export default UserCard;