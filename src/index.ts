// .env config
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mainRoute from "./server/routes/main";
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static("public"));

// templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", mainRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
