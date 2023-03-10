import React from 'react'
import { Navbar } from '../../components'
import "./createChar.css"

<<<<<<< HEAD
=======

>>>>>>> 85c05a0d92902255233742bf960ebb2be2a51f31
const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";

function apiCallClass() {
  fetch(dnd5eapiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: "{classes {name hit_die class_levels { level } } }",
    }),
  })
    .then((response) => response.json())
    .then((data) => {

      const classesName = data.data.classes.name;

      classesName.map((className) => {
        return className
      })
      console.log(className);
    })
    

   
    
}

apiCallClass();

// apiCallClass().then((classes) => {
//   const characterClasses = {};
//   for (let i = 0; i < classes.length; i++) {
//     const className = classes[i].name;
//     characterClasses[className] = `class${i}`;
//   }
//   console.log(characterClasses);
// });

const CreateChar = () => {
  return (
    <div>
      <Navbar />
      <h1>Create Your Character</h1>
    </div>
  )
}

export default CreateChar
