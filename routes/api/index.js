const router = require("express").Router();
const exampleRoutes = require("./example");
const userRoutes = require("./user");
// const authenticateRoutes = require("./authentication");
const loginRoutes = require("../../controllers/authenticationController");
const csvRoutes = require("./csv");

// Example routes
router.use("/example", exampleRoutes);
router.use("/user", userRoutes);
// router.use("/authenticate", authenticateRoutes);
router.use("/login", loginRoutes);
router.use("/csv", csvRoutes);
// router.use("/populateduser", csvRoutes);

module.exports = router;
