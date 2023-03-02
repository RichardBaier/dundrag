const db = require('../config/connection');
const { Profile, Character } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const characterSeeds = require('./characterSeeds.json');


db.once('open', async () => {
  try {

    await Character.deleteMany({});
    await Profile.deleteMany({});
    

    await Profile.create(profileSeeds);

    for (let i = 0; i < characterSeeds.length; i++) {
      const { _id, creator } = await Character.create(characterSeeds[i]);
      const profile = await Profile.findOneAndUpdate(
        { username: creator },
        {
          $addToSet: {
            characters: _id,
          }
        }
      );
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
