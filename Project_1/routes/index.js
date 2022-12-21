const booksRoute = require ("./booksRoute");
const usersRoute = require ("./usersRoute");

const express = require("express");
const router = express.Router();

router.use("/books", booksRoute);
router.use("/users", usersRoute);

module.exports = router;