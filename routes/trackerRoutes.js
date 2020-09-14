const express = require("express");
const Tracker = require("../models/trackerModel");

const route = express.Router();

route.get("/all", (req, res) => {
  Tracker.getAll()
    .then((trackers) => res.status(200).json(trackers))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.post("/add", (req, res) => {
  const body = req.body;

  Tracker.add(body)
    .then((id) => {
      res.status(201).json({ message: "Added successfully", id });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

route.patch("/edit/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tracker.update(id, changes)
    .then((ms) => res.status(200).json({ message: "updated successfully", ms }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  Tracker.remove(id)
    .then((ms) => res.status(200).json({ message: "deleted successfully", ms }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});
module.exports = route;
