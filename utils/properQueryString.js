const db = require("../db/db_call");
const QueryString = require("../utils/queryString");

function properQueryString(table, query = {}) {

  const { select, date, where, from, to, equal, order, by, format } = query;

  const queryString = new QueryString().Table(table);

  queryString.Select(select || "*");
  if (date) {
    queryString.Date();
  }
  if (where) {
    queryString.Where(where);
  }
  if (equal) {
    queryString.ToEqual(equal);
  }
  if (from && !to) {
    queryString.From(from);
  }
  if (!from && to) {
    queryString.To(to);
  }
  if (from && to) {
    queryString.Between(from, to);
  }
  if (order) {
    queryString.OrderBy(order, by);
  }
  if (format) {
    queryString.Format(format);
  }

  return queryString.Finalize();
}

module.exports = properQueryString;
