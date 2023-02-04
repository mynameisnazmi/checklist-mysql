const { Router } = require("express");
const { user } = require("../config/Dbconnect.js");
const md5 = require("md5");
const responseformat = require("../utils/responsformat");

// Initialization
const router = Router();

router.post("/auth", (req, res) => {
  const { nik, password } = req.body;
  const pasmd = md5(password);
  const sql =
    "SELECT ID,departemen,first_name,typeUser FROM user WHERE ID = " +
    nik +
    " AND pass = '" +
    pasmd +
    "'";
  //console.log(sql);
  user.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result);
    responseformat(200, result, "Success", res);
  });
});

//router.post("/register", UsersController.addUser);
//router.delete("/delete/:nik", UsersController.deleteUser);

module.exports = router;
