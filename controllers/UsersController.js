const db = require("../config/Dbconnect.js");
const responseformat = require("../utils/responsformat");

const authUser = (req, result) => {
  const { nik, password } = req.body;
  db.user.connect(function (err) {
    if (err) throw err;
    db.user.query(
      `SELECT * FROM customers WHERE address = ${nik}`,
      function (err, result) {
        if (err) throw err;
        console.log(result);
        responseformat(200, user, "ok", result);
      }
    );
  });
};

// Export of all methods as object
module.exports = {
  authUser,
};
