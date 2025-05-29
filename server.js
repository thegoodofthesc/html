const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;

// User with password "adminwerethebest" hashed
const USERS = [
  {
    username: 'admin',
    passwordHash: '$2b$10$OTGcErTHnqG0NqGGjU0vEu9Gj6EcYtt7QCoSzf6cmMqGDeHSqvIMK'
  }
];

app.use(express.static('public'));
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username);
  if (!user) return res.status(401).json({ success: false });

  const match = bcrypt.compareSync(password, user.passwordHash);
  if (!match) return res.status(401).json({ success: false });

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
