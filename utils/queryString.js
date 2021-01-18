function QueryString(string) {
  this.queryString = "";
  this.table = "";
}

QueryString.prototype = {
  Table: function (string) {
    this.table = string;
    return this;
  },
  Select: function (string) {
    this.queryString = `SELECT ${string || "*"} FROM ${this.table}`;
    return this;
  },
  Where: function (string) {
    this.queryString = `${this.queryString} WHERE ${string}`;
    return this;
  },
  Date: function () {
    this.queryString += ` WHERE event_date`;
    return this;
  },
  ToEqual: function (param) {
    if (isNaN(Number(param))) {
      this.queryString += ` = toDateTime('${param}', 'UTC')`;
    } else {
      this.queryString += ` = ${param}`;
    }
    return this;
  },
  From: function (param) {
    if (isNaN(Number(param))) {
      this.queryString += ` >= toDateTime('${param}', 'UTC')`;
    } else {
      this.queryString += ` >= ${param}`;
    }
    return this;
  },
  To: function (param) {
    if (isNaN(Number(param))) {
      this.queryString += ` <= toDateTime('${param}', 'UTC')`;
    } else {
      this.queryString += ` <= ${param}`;
    }
    return this;
  },
  Between: function (from, to) {
    if (isNaN(Number(from))) {
      this.queryString += ` BETWEEN toDateTime('${from}', 'UTC') AND toDateTime('${to}', 'UTC')`;
    } else {
      this.queryString += ` BETWEEN ${from} AND ${to}`;
    }
    return this;
  },
  OrderBy: function (field, direction) {
    this.queryString += ` ORDER BY ${field} ${direction}`;
    return this;
  },
  Format: function (string) {
    if (!string) {
      this.queryString = `${this.queryString} FORMAT JSON`;
    } else {
      this.queryString = `${this.queryString} ${string}`;
    }
    return this;
  },
  Finalize: function () {
    return this.queryString;
  },
};

module.exports = QueryString;
