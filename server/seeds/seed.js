const db = require('../config/connection');
const Profile = require('../models/Profile')
const Character = require('../models/Character')

db.once('open', async () => {
  try {

    const newCharacter = await Character.create({
      character_name: "Jeffrey",
      character_class: "Rogue",
      character_level: 2,
      character_exp: 69,
      origin_story: "A beginner rogue. Not very skilled just quite yet tbh!",
      background: "Asian",
      item: {
        item_name: 'knife',
        item_description: 'a small knife.'
      },
      spell: {
        spell_name: 'curse',
        spell_description: 'cussing and stuff idk .'
      },
      skill: {
        skill_name: 'stealth',
        skill_description: 'im usually rly quiet.'
      }
    })

    const profile = await Profile.create({
      username: 'jhoang',
      email: 'jhoang@gmail.com',
      password: 'password123!',
      character: newCharacter._id
    })
    
    console.log(profile);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
