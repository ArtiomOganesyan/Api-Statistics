const express = require("express");
const router = express.Router();

const db = require("../../db/db_call");
const properQueryString = require("../../utils/properQueryString");
const QueryString = require("../../utils/queryString");

router.get("/", async (req, res) => {
  const queryString = new QueryString()
    .Table("header_bidder.statistic")
    .Select()
    .Finalize();

  const response = await db.fetchClickHouse(queryString);
  res.json(response);
});

router.get("/query", async (req, res) => {
  const queryString = properQueryString("header_bidder.statistic", req.query);
  const response = await db.fetchClickHouse(queryString);
  res.json(response);
});

module.exports = router;
