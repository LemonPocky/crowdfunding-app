//TODO: Implement home routes for serving html pages
const router = require("express").Router();
const { User, Project } = require("../models");
const withAuth = require("../utils/auth");

// Israel
router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

// Lily
router.get("/details/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id);
    if (!projectData) {
      res.sendStatus(404).json("Project Not Found");
      return;
    }
    const project = projectData.get({ plain: true });
    res.render("details", {
      project,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Marko
router.get("/profile", withAuth, async (req, res) => {
    try{
        const user_id = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Project,
                    attributes:[
                        'name',
                        'date_created',
                    ]
                }
                ]
        });
        // req.session.user_id 
        if(!user_id){
            res.sentStatus(404).json('User not found');
            return;
        }
        res.render("profile");
    }
    catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
    
  // TODO: Get the user_id from req.session
});

module.exports = router;
