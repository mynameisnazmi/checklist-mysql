const { Router } = require("express");
const { checklist } = require("../config/Dbconnect.js");

// Initialization
const router = Router();

router.post("/line/", (req, res) => {
  let machinenameprc;
  const { machinename, partname, Tanggal, Nama } = req.body;
  //console.log(machinename);
  machinenameprc = machinename.toLowerCase();
  machinenameprc = machinenameprc.replace("-", "_");
  const sql1 =
    "SELECT * FROM " +
    machinenameprc +
    "_" +
    partname +
    " WHERE Tanggal = " +
    "'" +
    Tanggal +
    "'";
  //'2022-10-10'";

  const sql2 =
    "INSERT INTO " +
    machinenameprc +
    "_" +
    partname +
    " (Nama, Tanggal) VALUES ('" +
    Nama +
    "', '" +
    Tanggal +
    "')";

  //console.log(sql1);

  try {
    checklist.query(sql1, (err, result) => {
      if (err) {
        res.status(200);
        console.log(err.errno);
      } else {
        //jika tidak ada data
        if (result.length === 0) {
          checklist.query(sql2, (err, result) => {
            if (err) {
              res.status(200);
              console.log(err.errno);
            }
            //berhasil menambah data
            else {
              console.log(result);
              checklist.query(sql1, (err, result) => {
                if (err) {
                  res.status(200);
                  console.log(err.errno);
                } else {
                  res.status(200);
                  res.json({
                    result,
                  });
                }
              });
            }
          });
        }
        //jika ada data
        else {
          //console.log(result);
          res.status(200);
          res.json({
            result,
          });
        }
      }
    });
  } catch (error) {
    res.status(200);
    console.log(err.errno);
  }
});

// router.post("/line/add/", (req, res) => {
//   let machinenameprc;
//   const { machinename, partname, Nama, Tanggal } = req.body;
//   machinenameprc = machinename.toLowerCase();
//   machinenameprc = machinenameprc.replace("-", "_");
// });

router.post("/line/update/", (req, res) => {
  let machinenameprc;
  let strcnt = "";
  const { machinename, partname, Tanggal } = req.body;
  machinenameprc = machinename.toLowerCase();
  machinenameprc = machinenameprc.replace("-", "_");
  const allowed = ["Nama", "Tanggal", "machinename", "partname"];
  const newobj = Object.keys(req.body)
    .filter((key) => !allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: req.body[key],
      };
    }, {});
  //console.log(newobj);
  let keysarr = Object.keys(newobj);
  keysarr.map((data, index) => {
    //  console.log(index + 1);
    //console.log(keysarr.length);
    if (index + 1 == keysarr.length) {
      strcnt += data + " = '" + req.body[data] + "'";
    } else {
      strcnt += data + " = '" + req.body[data] + "', ";
    }
  });
  //console.log(strcnt);
  const sql =
    "UPDATE " +
    machinenameprc +
    "_" +
    partname +
    " SET " +
    strcnt +
    " WHERE Tanggal = '" +
    Tanggal +
    "'";
  console.log(sql);
  try {
    checklist.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(result);
        //console.log(err);
        res.json({
          message: result.affectedRows + "record inserted",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});
//router.post("/register", UsersController.addUser);
//router.delete("/delete/:nik", UsersController.deleteUser);

module.exports = router;
