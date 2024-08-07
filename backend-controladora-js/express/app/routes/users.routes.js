module.exports = app => {
  const user = require("../controllers/users.controller.js");
  const verifyToken = require("../middleware/authMiddleware.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", user.create);

  // Retrieve all Tutorials
  router.get("/", user.findAll);

  // Retrieve all metadata from a backup
  router.get("/metabackup", user.getMetadataFromBackup);

  // Retrieve a single Tutorial with id
  router.get("/:id", user.findOne);

  // Update a Tutorial with id
  router.put("/:id", user.update);

  // Delete a Tutorial with id
  router.delete("/:id", user.delete);

  // Delete all Tutorials
  router.delete("/", user.deleteAll);

  app.use('/api/users', verifyToken ,router);
};
