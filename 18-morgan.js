import morgan from "morgan";
import { authorized } from "./authorized.js";
import { logger } from "./16-logger.js";
// app.use('/api',logger);
//api/home/about/product apply after logger anything have api in url
// app.use([logger,authorized])

app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("home real");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);

  res.send("Items");
});
const port = 5000;
