const express = require("express");
const router = express.Router();

const SessionController = require('./controllers/SessionController');
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

router.post('/sessions', SessionController.create);

router.get("/ongs", OngController.index);
router.post("/ongs", OngController.create);

router.get("/incidents", IncidentController.index);
router.post("/incidents", IncidentController.create);
router.delete("/incidents/:id", IncidentController.delete);

router.get("/profile", ProfileController.index);

module.exports = router;
