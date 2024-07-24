import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectSelectedUser } from '../redux/usersSlice';

const UserDetailsPage = ({ match }) => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectSelectedUser);
    const { userId } = match.params;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (userId && selectedUser && selectedUser.id !== parseInt(userId)) {
        }
    }, [userId, selectedUser, dispatch]);

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

export default UserDetailsPage;