const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "index.html"));
});

router.get("/style", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "style.css"));
});

router.get("/script", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "script.js"));
});

module.exports = router;
