const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(" app app app ");
});

module.exports = router;
