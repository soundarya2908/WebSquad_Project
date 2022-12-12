import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {findAllUsersThunk} from './user-thunks.js';

const userList = () => {
    const {users} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [dispatch])
    return (
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li className="list-group-item"
                        key={user._id}>
                        {user.username}
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default userList;