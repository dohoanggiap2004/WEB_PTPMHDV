require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const route = require("./routers/index");
const passport = require('passport')
//middlewars || configs
const { errorHandler } = require("./middlewares/errorHandler");
const { logger } = require("./middlewares/logEvents");
const corsOptions = require("./config/corsOptions");
const localPassport = require('./config/localPassport')
const googlePassport = require('./config/googlePassport')
const { connectionSequelize } = require('./config/sequelizeConnect')
// const verifyJWT = require("./middleware/verifyJWT");
const credentials = require("./middlewares/credentials");

const app = express();
const port = process.env.PORT || 3500

//connect to db
connectionSequelize()

// Custom middleware Logger
app.use(logger);

// Handle options check before - CORS
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// build-in middleware to handle urlencode from data
app.use(express.urlencoded({ extended: true }));

// build-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// Serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

//authenticate via passportjs
localPassport()
googlePassport()
app.use(passport.initialize());

//route
route(app);

// Custom Middleware Error Logger
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
