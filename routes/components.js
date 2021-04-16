const router = require("express").Router();
const fs = require("fs");

router.get("/components/:componentName", (req, res) => {
  try {
    const component = fs.readFileSync(
      `./components/${req.params.componentName}.json`,
      "utf8"
    );
    return res.status(200).send(component);
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
});

module.exports = router;
