const router = require("express").Router();
const controller = require("./controller");

router.get("/main", controller.mainView);

module.exports = router;
