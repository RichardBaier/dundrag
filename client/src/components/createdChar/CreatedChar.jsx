import { QUERY_CHARACTERS } from "../../utils/queries";
// import { Link } from "react-router-dom";
import "./createdChar.css";

import { useQuery } from "@apollo/client";

const CreatedChar = () => {
  const { loading, data } = useQuery(QUERY_CHARACTERS);
  const charactersList = data?.getCharacters || [];

  return (
    <>
      <div className="character-list">
        {loading ? (
          <div>Loading....</div>
        ) : (
          charactersList.map(({ character_name, character_class }) => {
            return(
              <div className="char-container" key={`${character_name} ${character_class}`}>
              <div className="char-info">
                <div className="char-name">    
                  <h2>
                    Character Name:
                  </h2>
                  <h3>
                    {character_name}
                  </h3>
                </div>
                <div className="char-class">
                  <h2>
                    Character Class: 
                  </h2>
                  <h3>
                    {character_class}
                  </h3>
                </div>
              </div>
            </div>
           )
          })
        )}
      </div>
    </>
  );
};

export default CreatedChar;

// on create character page
// - set create character
// - character name and character class ~> ON SUBMIT
// - take back to Profile
// - render that new character name and class
// - queryCharacter from our GraphQL by profile token
// that means we need to include a parameter of 'creatorToken' in our createdcharacter model.
