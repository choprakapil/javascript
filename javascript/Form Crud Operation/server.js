const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const MONGO_URL = 'mongodb+srv://FormDBUsername:JJKtlFkvV3z6Pk2H@formdbcluster.gaceorc.mongodb.net/?retryWrites=true&w=majority&appName=FormDBCluster';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// Create
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: "User saved!" });
});

// Read
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update
app.put('/api/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "User updated!" });
});

// Delete
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted!" });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
