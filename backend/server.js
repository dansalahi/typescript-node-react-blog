import mongoose from "mongoose";

import express from "express";
const app = express();

// Set express json middleware
app.use(express.json());

// set express middleware to access control
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

// setup routers

// set Ports
const PORT = process.env.EXPRESS_PORT;

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Backend is running on the port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
