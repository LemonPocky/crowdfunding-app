const router = require("express").Router();
const { Project } = require("../../models");

// TODO: Add authentication to project methods

router.post("/", async (req, res) => {
  try {
    // TODO: Check if the user is logged in and has a valid user_id

    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      // TODO: Return if the user is not logged in
    }
    const currentUser = req.session.user_id
    // TODO: Check if the project id belongs to this user
    
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
