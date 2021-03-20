require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginMiddleware = require("./middleware/login");
const refreshMiddleware = require("./middleware/refresh");
const lyricsMiddleware = require("./middleware/lyrics");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", loginMiddleware);
app.post("/refresh", refreshMiddleware);

app.get("/lyrics", lyricsMiddleware);

app.listen(3001);
