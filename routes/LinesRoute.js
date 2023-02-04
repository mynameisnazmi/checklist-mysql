const { Router } = require("express");
const { checklist } = require("../config/Dbconnect.js");

// Initialization
const router = Router();

router.post("/Line", (req, res) => {
  let machinenameprc;
  const { machinename, partname } = req.body;
  machinenameprc = machinename.toLowerCase();
  machinenameprc = machinenameprc.replace("-", "_");
  const sql = "SELECT * FROM " + machinenameprc + "_" + partname;
  console.log(sql);
  try {
    checklist.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          result,
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
