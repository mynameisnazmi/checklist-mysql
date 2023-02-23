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

router.post("/register", (req, res) => {
  const { nik, nama, department, typeuser, password } = req.body;
  const pasmd = md5(password);
  const sqlcek = "SELECT ID FROM user WHERE ID = '" + nik + "'";
  const sql =
    "INSERT INTO user (ID,departemen,first_name,typeUser,email,pass) VALUES ('" +
    nik +
    "','" +
    department +
    "','" +
    nama +
    "','" +
    typeuser +
    "','" +
    nik +
    "','" +
    pasmd +
    "')";
  //console.log(sqlcek);
  try {
    user.query(sqlcek, (err, result) => {
      if (err) {
        res.status(500);
        console.log(err.errno);
      } else {
        //jika tidak ada data
        if (result.length === 0) {
          user.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            responseformat(200, "", "Success", res);
          });
        }
        //jika ada data
        else {
          responseformat(202, result, "User Already Created", res);
        }
      }
    });
  } catch (error) {
    res.status(200);
    console.log(error.errno);
  }
});

router.get("/test", (req, res) => {
   res.status(200);
            res.json({
              Failure: "No Data",
            });
});

//router.post("/register", UsersController.addUser);
//router.delete("/delete/:nik", UsersController.deleteUser);

module.exports = router;
