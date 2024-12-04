import exp from "constants";
import express from "express";
import path from "path";
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
