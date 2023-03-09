import React from 'react'
import { Navbar, CreatedChar } from '../../components'
import './profile.css'
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-page">
        <div className="createdChar">
          <h1>Current Characters</h1>
          <div className="character-list">
            <CreatedChar />
          </div>
        </div>
        <Link to='/createChar'>
          <button className="createBtn">
            Create New Character
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Profile