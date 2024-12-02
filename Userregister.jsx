import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

const Userregister = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    busStop: "",
    busNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("User registered successfully!");
      setFormData({ name: "", course: "", busStop: "", busNumber: "" });
    } catch (error) {
      console.error(error);
      alert("Error registering user.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        User Registration
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="Course"
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="Bus Stop"
        name="busStop"
        value={formData.busStop}
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="Bus Number"
        name="busNumber"
        value={formData.busNumber}
        onChange={handleChange}
        required
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Register
      </Button>
    </Box>
  );
};

export default Userregister;
