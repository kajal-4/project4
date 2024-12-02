const app = require('express').Router();
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

const User = require('../model/login'); // Import login model for login (if it's different)


// Register Route
// Register Route
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  // Basic validation to check if email, username, and password are provided
  if (!email || !username || !password) {
    return res.status(400).json({ message: 'Email, username, and password are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (password stored directly - not recommended for production)
    const newUser = new User({
      email,
      username,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with success message
    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Catch and respond to server errors
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// Login Route
app.post('/login', async (request, response) => {
    const { username, password } = request.body;

    try {
        // Find the user by username (or email if that's how users are identified)
        const user = await User.findOne({ username });

        if (!user) {
            return response.json({ success: false, message: 'Invalid username' });
        }

        // Compare the entered password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            return response.json({ success: true, message: 'Login successful' });
        } else {
            return response.json({ success: false, message: 'Invalid password' });
        }

    } catch (error) {
        // Handle server errors
        response.status(500).json({ success: false, message: 'Error during login', error: error.message });
    }
});

module.exports = app;
