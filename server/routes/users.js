const { Router } = require("express");
const users = require("../db/users.json");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("No id was provided");
  }

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(400).send(`No user was found with id ${id}`);
  }

  res.status(200).send(user);
});

module.exports = router;
