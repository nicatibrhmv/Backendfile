const express = require("express");
const fs = require("fs");
const app = express();
let employees = [];
fs.readFile("./data.json", "utf8", (err, data) => {
  if (!err) {
    employees = JSON.parse(data);
  } else {
    console.log(err);
  }
});
app.get("/user", function (req, res) {
  res.send(employees);
});