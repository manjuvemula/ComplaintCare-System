const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 🔐

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // 👈 Save hashed password
      userType,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});
