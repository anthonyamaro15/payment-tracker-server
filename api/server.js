require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const trackerRoutes = require("../routes/trackerRoutes");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/tracker", trackerRoutes);

server.use("/", (req, res) => res.send("api running."));

module.exports = server;
