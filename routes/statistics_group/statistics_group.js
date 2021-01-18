const express = require("express");
const router = express.Router();

const db = require("../../db/db_call");

router.get("/", async (req, res) => {
  // db.fetch("select * from ", "users");

  const queryString = new db.QueryString()
    .Table("header_bidder.statistic_group")
    .Select()
    .Where("app_id")
    .Between("50000", "233333")
    .OrderBy("bidder_id", "ASC")
    .Finalize();

  console.log(queryString);

  const response = await db.fetchClickHouse(queryString);
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
