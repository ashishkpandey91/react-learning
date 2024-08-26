/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='bg-gray-300 w-auto p-5 rounded-b-lg font-bold'>Please Login</div>

    return <div className='bg-gray-300 w-auto p-5 rounded-b-lg font-bold'>Welcome {user.username}</div>
}

export default Profile;