import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friend, setFriend] = React.useState([]);

    const fetchFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('get', res)
            })
            .catch(err => console.log(err));
    };



    return (
        <div>
            {friend.map}
        </div>
    )
}

export default FriendsList;