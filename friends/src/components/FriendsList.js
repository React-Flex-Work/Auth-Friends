import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

const FriendsList = () => {
    const [friends, setFriends] = React.useState([]);
    const [editingFriend, setEditingFriend] = React.useState();

    const fetchFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('get', res)
                setFriends(res.data)
            })
            .catch(err => console.log(err));
    };

    React.useEffect(() => {
        fetchFriends();
    }, []);

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err.response));
    };

    const editFriend = friendObj => {
        setEditingFriend(friendObj);
    };

    return (
        <div className='form'>
            <FriendForm
                editingFriend={editingFriend}
                setFriends={setFriends}
                setEditingFriend={setEditingFriend}
            />
            {friends.map(friendObj => {
                return (
                    <div className='friend-card' key={friendObj.id}>
                        {' '}
                        <p>Name: {friendObj.name}</p>
                        <p>Age: {friendObj.age}</p>
                        <p>Email: {friendObj.email}</p>
                        <div className='button-group'>
                            <button onClick={() => editFriend(friendObj)}>EDIT</button>{' '}
                            <button onClick={() => deleteFriend(friendObj.id)}>DELETE</button>{' '}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default FriendsList;