require("dotenv").config();

console.log("process.env.DB_USER", process.env.DB_USER);

module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};
