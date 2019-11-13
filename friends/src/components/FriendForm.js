import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendForm(props) {
    const [form, setForm] = React.useState({ name: '', age: '', email: '' });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    React.useEffect(() => {
        if (props.editingFriend) {
            setForm({
                name: props.editingFriend.name,
                age: props.editingFriend.age,
                email: props.editingFriend.email
            });
        } else {
            setForm({ name: '', age: '', email: '' });
        }
    }, [props.editingFriend]);

    const submitHandler = e => {
        e.preventDefault();

        if (props.editingFriend) {
            axiosWithAuth()
                .put(`/friends/${props.editingFriend.id}`, form)
                .then(res => {
                    console.log('EDIT', res);
                    props.setFriends(res.data);
                    setForm({ name: '', age: '', email: '' });
                    props.setEditingFriend(null);
                });
        } else {
            axiosWithAuth()
                .post('/friends', form)
                .then(res => {
                    console.log('POST', res)
                    props.setFriends(res.data)
                    setForm({ name: '', age: '', email: '' });
                })
                .catch(err => console.log(err.response));
        }
    };

    const closeEdit = e => {
        e.preventDefault();
        props.setEditingFriend(null);
    };

    return (
        <div className='inputs'>
            <form onSubmit={submitHandler}>
                <input
                    required
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={form.name}
                    onChange={handleChanges}
                />
                <input
                    required
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={form.age}
                    onChange={handleChanges}
                />
                <input
                    required
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={handleChanges}
                />
                <button type='submit'>{props.editingFriend ? 'Submit Edit' : 'Add Friend'}</button>
                <button onClick={closeEdit}>Cancel</button>
            </form>
        </div>
    );
}