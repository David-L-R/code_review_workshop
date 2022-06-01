const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  res.send("test");
});

router.get("/posts", (req, res) => {
  res.send("test successful");
});

module.exports = router;
