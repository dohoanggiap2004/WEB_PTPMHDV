require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
//middlewars || configs
const corsOptions = require("./config/corsOptions");
const recommendationRoutes = require("./routes/recommendation");
const { connectionSequelize } = require('./config/sequelizeConnect')

const app = express();
const port = 3500

//connect to db
connectionSequelize()

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

app.use('/api/elastic', recommendationRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
