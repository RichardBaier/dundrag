import React from 'react'
import { Navbar, CreatedChar } from '../../components'
import './profile.css'
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-page">
        <div className="createdChar">
          <h1>Current Characters</h1>
        </div>
        <Link to='/createChar'>
          <button className="createBtn">
            Create New Character
          </button>
        </Link>
      </div>
      <div>
        <CreatedChar />
      </div>
    </div>
  )
}

export default Profile