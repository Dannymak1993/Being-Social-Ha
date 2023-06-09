const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { names, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});
  await User.collection.insertMany(names);

  // Drop existing thoughts
  await Thought.deleteMany({});
  await Thought.collection.insertMany(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
