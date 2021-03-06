const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require('./homeRoutes');
const projectRoutes = require('./api/projectRoutes');


router.use('/', homeRoutes);
router.use('/profile', projectRoutes)
router.use("/api", apiRoutes);

module.exports = router;
