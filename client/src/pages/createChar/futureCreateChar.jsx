// import { Navbar } from "../../components";
// import "./createChar.css";
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";

// function CreateChar() {
//   const [characterClass, setCharacterClass] = useState(null);

//   useEffect(() => {
//     axios.post(dnd5eapiLink, {
//       query: `
//       query Query {
//         classes {
//           name
//           class_levels {
//             level
//           }
//         }
//       }
//       `
//     }).then(result => {
//       setCharacterClass(result.data.data.classes[0]);
//       console.log(result)
//     }).catch(error => {
//       console.error(error);
//     });
//   }, []);

//   if (!characterClass) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>{characterClass.name}</h2>
//       <p>characterClassName: {characterClass.class_levels[0].level}</p>
//     </div>
//   );
// }

// // data.data.classes[0].class_levels[0].level


// export default CreateChar;

// // {/* <label for="characterClassesList">Choose a class:</label>

// // <select name="classes" id="classes">
// //   <option value="volvo">Volvo</option>
// //   <option value="saab">Saab</option>
// //   <option value="mercedes">Mercedes</option>
// //   <option value="audi">Audi</option>
// // </select> */}
