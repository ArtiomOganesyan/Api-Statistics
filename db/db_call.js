const pg = require("pg");
const ch = require("@apla/clickhouse");
const config = require("config");

const { user, password, host, port, database } = config.get("postgres");

const clickhouse = new ch({
  host: "localhost",
  port: 8123,
});

async function fetchClickHouse(string) {
  const stream = await clickhouse.querying(string);
  return stream;

  //Promise interface
  //NOT RECOMMENDED

  // //TODO
  // //Large dataset
  // //RECOMMENDED METHOD
  // const stream = await clickhouse.query(
  //   "select * from header_bidder.statistic LIMIT 10000000 FORMAT JSON"
  // );
  // await stream.on("metadata", (columns) => {
  //   // console.log(columns);
  // });
  // let rows = [];
  // await stream.on("data", (row) => rows.push(row));
  // await stream.on("error", (err) => {
  //   // console.log(err);
  // });
  // await stream.on("end", () => {
  //   // console.log(
  //   //   rows,
  //   //   rows.length,
  //   //   stream.supplemental.rows,
  //   //   stream.supplemental.rows_before_limit_at_least // how many rows in result are set without windowing
  //   // );
  // });
  // return rows;
}

// const client = new pg.Client({
//   user: user,
//   password: password,
//   host: host,
//   port: port,
//   database: database,
// });

module.exports = { fetchClickHouse };
