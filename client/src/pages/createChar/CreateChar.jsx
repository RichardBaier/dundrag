import { Navbar } from "../../components";
import "./createChar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ADD_CHARACTER } from "../../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { Token } from "graphql";

const dnd5eapiLink = "https://www.dnd5eapi.co/graphql";
let characterClassArray = [];

const CreateChar = () => {
  const [characterFormData, setCharacterFormData] = useState({
    characterName: "",
    characterClass: "",
  });
  const [addChar, { error }] = useMutation(ADD_CHARACTER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCharacterFormData({
      ...characterFormData,
      [name]: value,
    });
  };

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
        for (let i = 0; i < result.data.data.classes.length; i++) {
          let className = result.data.data.classes[i].name;

          characterClassArray.push(className);
        }
        setCharacterFormData(characterClassArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!characterFormData) {
    return <p>Loading...</p>;
  }
  const handleCharacterSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    if (!characterFormData) {
      return false;
    }
    try {
      const { data } = await addChar({
        variables: { ...characterFormData, creatorToken: Token},
      });
      setCharacterFormData({
        characterName: data.characterName,
        characterClass: data.characterClass,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      {Auth.loggedIn() ? (
        <div className="create-char-container">  
          <div className="create-char-card">
            <p>{error && <span>{error.message}</span>}</p>
            <form onSubmit={handleCharacterSubmit} className="create-char-form">
              <h1>Create a Character:</h1>
              <input
                type="text"
                className="char-input"
                name="characterName"
                value={characterFormData.value}
                onChange={handleChange}
                placeholder="Character Name"
              />
                <select
                  className="char-input"
                  name="characterClass"
                  value={characterFormData.value}
                  onChange={handleChange}
                >
                  <option value="">Class Type</option>
                  {characterClassArray.map((className, index) => (
                    <option value={className} key={index}>
                      {JSON.stringify(className).replace(/"/g,"")}
                    </option>
                  ))}
                </select>
              <button type="submit" className="char-input" id="char-button">
                Submit
                {/* <Link to={"/profile"}>Submit</Link> */}
              </button>
            </form>
          </div>
        </div>
        ) : (
          <p>
            You need to be logged in to create a character. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
    </div>
  );
}

export default CreateChar;