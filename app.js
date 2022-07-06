import express from "express";

const app = express();
app.use(express.json());
app.post("/users", (req, res) => {
  const { password } = req.body;

  if (!password) {
    res.sendStatus(400);
    return;
  }
  res.send({ userId: 23 });
});

export default app;
