import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { currentUser } from '../../JS/Actions/user'

import './Profile.css'

const Profile = () => {

    // ki te5dem bi redux e5dem bi redux mich 
    const user = useSelector(state => state.userReducer.user)

    // 

    const dispatch = useDispatch()

    //

    useEffect(() => {
        dispatch(currentUser())
    }, []);

    return (
        <div className='profileContainer'>
            <h4>Name:{user.name} </h4>
            <h4>Email:{user.email} </h4>
            <h4>Phone: {user.phone}</h4>
        </div>
    )
}

export default Profile