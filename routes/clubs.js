const express = require("express");
const router = express.Router();
const Club = require("../models/Club.js");
const idValidator = require("../validations/id.js");
const jwt = require("../middlewares/jwt.js");

router.get("/", jwt, async (req, res) => {
  try {
    const clubs = await Club.getClubs();
    res.status(200).json(Club.response(clubs));
  } catch (error) {
    res.status(400).json(Club.error(error.message));
  }
});

router.get("/:id", jwt, async (req, res) => {
  try {
    const cid = req.params.id;
    idValidator(cid);
    const club = await Club.getClub(cid);
    res.status(200).json(Club.response(club));
  } catch (error) {
    res.status(400).json(Club.error(error.message));
  }
});

router.post("*", jwt, async (req, res) => {
  res
    .status(400)
    .send(
      "Other crud functionality will be added once role based auth is added"
    );
});

module.exports = router;
