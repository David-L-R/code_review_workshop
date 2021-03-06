const { Router } = require("express");
const posts = require("../db/posts.json");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send(posts);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("No id was provided");
  }

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return res.status(400).send(`No post was found with id ${id}`);
  }

  res.status(200).send(post);
});

module.exports = router;
