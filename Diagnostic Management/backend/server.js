const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/diagno", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected to diagno database"))
  .catch((err) => console.error(" MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  role: { type: String, default: "user" },
});

const User = mongoose.model("user", userSchema);

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  service: String,
  createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

app.get("/", (req, res) => {
  res.send(" Server is running...");
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: " User registered successfully!",
      user: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error(" Registration Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: " Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(" Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/book-appointment", async (req, res) => {
  try {
    const { name, email, phone, date, service } = req.body;
    if (!name || !email || !phone || !date || !service) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      date,
      service,
    });
    await newAppointment.save();

    res.status(201).json({ message: " Appointment booked successfully!" });
  } catch (err) {
    console.error(" Booking Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/appointments/:email", async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const appointments = await Appointment.find({ email }).sort({ date: 1 });
    res.status(200).json(appointments);
  } catch (err) {
    console.error(" Fetch Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);
