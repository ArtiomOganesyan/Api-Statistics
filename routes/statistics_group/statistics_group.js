const express = require("express");
const router = express.Router();

const db = require("../../db/db_call");

router.get("/", async (req, res) => {
  // db.fetch("select * from ", "users");

  const response = await db.fetchClickHouse("header_bidder.statistic_group");
  res.json(response.data);
});

router.get("/query", async (req, res) => {
  console.log("reqQuery ==== > ", req.query);
  const response = await db.fetchClickHouse(
    "header_bidder.statistic_group",
    req.query
  );
  res.json(response);
});

module.exports = router;
