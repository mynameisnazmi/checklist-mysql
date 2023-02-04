const mysql = require("mysql");

const checklist = mysql.createConnection({
  host: "localhost",
  user: "root", //sesuaikan dengan username di laptop km
  password: "dev", //sesuaikan dengan password di laptop km
  database: "checklistnew", //nama database yang kita buat tadi
  dateStrings: true,
});

// checklist.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const user = mysql.createConnection({
  host: "localhost",
  user: "root", //sesuaikan dengan username di laptop km
  password: "dev", //sesuaikan dengan password di laptop km
  database: "arghapedia", //nama database yang kita buat tadi
});

// user.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = {
  checklist,
  user,
};
