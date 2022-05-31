const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("test");
});

router.get("/test", (req, res) => {
  res.send("test successful");
});

module.exports = router;
