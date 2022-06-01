const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
