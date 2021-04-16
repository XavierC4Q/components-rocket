const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const componentRoutes = require("./routes/components");

const app = express();
const PORT = 3999;

const main = () => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.get("/", (req, res) => {
    return res.send("Hello");
  });

  app.use(componentRoutes);

  app.use("*", (req, res) => res.status(404).send("Not found"));

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

main();
