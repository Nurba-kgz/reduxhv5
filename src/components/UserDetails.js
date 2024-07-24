import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedUser } from '../redux/usersSlice';

const UserDetails = () => {
    const selectedUser = useSelector(selectSelectedUser);

    if (!selectedUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-details">
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default UserDetails;