const { Router } = require("express");
const { checklist } = require("../config/Dbconnect.js");

// Initialization
const router = Router();
//select conveyer_arus..., FROM line_4_silo Where tanggal between A AND B
// router.get('/p/:tagId', function(req, res) {
//   res.send("tagId is set to " + req.params.tagId);
// });
router.get(
  "/line/" /*:machinename/:partname/:item/:from/:until*/,
  (req, res) => {
    const { machinename, partname, item, from, until } = req.query;
    let machinenameprc;
    //console.log(machinename);
    machinenameprc = machinename.toLowerCase();
    machinenameprc = machinenameprc.replace("-", "_");
    let machinenameslc = machinenameprc.slice(0, 4);

    let itmproprty = [
      "_VDE_Vms",
      "_VDE_Vge",
      "_VDE_Hms",
      "_VDE_Hge",
      "_VNDE_Vms",
      "_VNDE_Vge",
      "_VNDE_Hms",
      "_VNDE_Hge",
      "_TempM",
      "_ArusR",
      "_ArusS",
      "_ArusT",
      "_Ket",
    ];

    let itmproprtyCT = [
      //"_Vis",
      //"_Stet",
      "_ArusR",
      "_ArusS",
      "_ArusT",
      "_VDE_Vms",
      "_VDE_Vge",
      "_VNDE_Vms",
      "_VNDE_Vge",
      "_TempM",
      //"_Ket",
    ];

    let itmwithprpty = "";

    if (machinenameslc === "coat" || machinenameslc === "metz") {
      itmproprtyCT.map((data, index) => {
        if (index + 1 === itmproprtyCT.length) {
          itmwithprpty += item + data;
        } else {
          itmwithprpty += item + data + ", ";
        }
      });
    } else {
      itmproprty.map((data, index) => {
        if (index + 1 === itmproprty.length) {
          itmwithprpty += item + data;
        } else {
          itmwithprpty += item + data + ", ";
        }
      });
    }
    //console.log(itmwithprpty);

    const sql1 =
      "SELECT Tanggal, " +
      itmwithprpty +
      " FROM " +
      machinenameprc +
      "_" +
      partname +
      " WHERE Tanggal BETWEEN " +
      "'" +
      from +
      "' AND " +
      "'" +
      until +
      "'";
    console.log(sql1);
    try {
      checklist.query(sql1, (err, result) => {
        if (err) {
          res.status(500);
          console.log(err.errno);
        } else {
          //jika tidak ada data
          if (result.length === 0) {
            res.status(200);
            res.json({
              Failure: "No Data",
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
  }
);

router.post("/line/", (req, res) => {
  const { machinename, partname, Tanggal, Nama } = req.body;
  const sunday = new Date(Tanggal);

  let day1 = sunday.getDay(); //0-6
  if (day1 !== 0) {
    let day1sel = 6 - day1 + 1;
    sunday.setDate(sunday.getDate() + day1sel);
    //console.log(sunday);
  } else {
    sunday.setDate(sunday.getDate());
    //console.log(sunday);
  }
  const monday = new Date(sunday);
  monday.setDate(monday.getDate() - 6);
  // console.log(monday);

  let machinenameprc;
  //console.log(machinename);
  machinenameprc = machinename.toLowerCase();
  machinenameprc = machinenameprc.replace("-", "_");

  const sql1 =
    "SELECT * FROM " +
    machinenameprc +
    "_" +
    partname +
    " WHERE Tanggal BETWEEN " +
    "'" +
    monday.toISOString().slice(0, 10).replace("T", " ") +
    "' AND " +
    "'" +
    sunday.toISOString().slice(0, 10).replace("T", " ") +
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

  console.log(sql1);

  try {
    checklist.query(sql1, (err, result) => {
      if (err) {
        res.status(500);
        console.log(err.errno);
      } else {
        //jika tidak ada data
        if (result.length === 0) {
          checklist.query(sql2, (err, result) => {
            if (err) {
              res.status(500);
              console.log(err.errno);
            }
            //berhasil menambah data
            else {
              console.log(result);
              checklist.query(sql1, (err, result) => {
                if (err) {
                  res.status(500);
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
