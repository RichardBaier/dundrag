import { Navbar } from "../../components";
import "./createChar.css";
import { useEffect, useState } from "react";
import axios from "axios";

const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";
let characterClassArray = [];

function CreateChar() {
  const [characterClass, setCharacterClass] = useState(null);

  useEffect(() => {
    axios
      .post(dnd5eapiLink, {
        query: `
      query Query {
        classes {
          name
        }
      }
      `,
      })
      .then((result) => {
        console.log(
          "result.data.data.classes.length ~>",
          result.data.data.classes.length
        );

        for (let i = 0; i < result.data.data.classes.length; i++) {
          let className = result.data.data.classes[i].name;
          console.log("className ~>", className);
          characterClassArray.push(className);
        }
        setCharacterClass(characterClassArray);

        console.log("this is what i want! ~>", characterClassArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!characterClass) {
    return <p>Loading...</p>;
  }

  return (
    
    <div>
      <label for="characterClassSelection" id="characterClassSelection"></label>
      <select>
      {characterClass.map((className, index) => (
        <option key={index}>{className} </option>
      ))}
      </select>
    </div>
  );
}

export default CreateChar;


{/* <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}
