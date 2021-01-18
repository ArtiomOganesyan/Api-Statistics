const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "inApp-api-statistics",
      //   description: "",
    }
  },
  apis: [
    "./routes/statistics/statistics.js",
    "./routes/statistics_group/statistics_group.js",
    "./swaggerDocumentation.yaml",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Middleware
// app.use("/", () => {
//   console.log("middleware");
// });

//ROUTES

const statisticsRoute = require("./routes/statistics/statistics");
const statisticsGroupRoute = require("./routes/statistics_group/statistics_group.js");
const authRoute = require("./routes/auth");

app.use("/statistics", statisticsRoute);
app.use("/statistics_group", statisticsGroupRoute);
app.use("/auth", authRoute);

app.listen(5002);
