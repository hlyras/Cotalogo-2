const router = require("express").Router();
// const lib = require('jarmlib');

const homeController = require("../controller/home");

router.get("/", lib.route.toHttps, homeController.index);

// router.get("/login", lib.route.toHttps, homeController.login);

// router.use("/user", require("./user"));

module.exports = router;