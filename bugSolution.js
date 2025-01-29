const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Invalid user data' });
  }
  console.log(user); 
  res.status(201).json({ message: 'User created' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});