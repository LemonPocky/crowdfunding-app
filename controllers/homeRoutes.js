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
  res.render("details");
});

// Marko
router.get("/profile", withAuth, async (req, res) => {
  // TODO: Get the user_id from req.session
  res.render("profile");
});

module.exports = router;
