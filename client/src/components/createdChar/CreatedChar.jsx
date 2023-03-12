import React from 'react'
import { QUERY_CHARACTER } from '../../utils/queries'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
// import "./createChar.css";
import Profile from '../../pages/profile/Profile';


const CreatedChar = () => {

  const [createdCharacter, setCreatedCharacter] = useState('Hello')


  return (
    <>
      <h1>{createdCharacter}</h1>

    </>
  )
}

export default CreatedChar

// on create character page
// - set create character 
// - character name and character class ~> ON SUBMIT
// - take back to Profile
// - render that new character name and class 
// - queryCharacter from our GraphQL by profile token 
  // that means we need to include a parameter of 'creatorToken' in our createdcharacter model. 