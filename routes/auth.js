const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const token = req.headers["api_key"];
  res.status(200).json({
    auth_token: token,
  });
});

module.exports = router;
