import express from "express";
import { people } from "../data";

export const router = express.Router();

// GET
router.get("/", (req, res) => {
  return res.status(200).json({ success: true, data: people }).end();
});

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  if (!name)
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  return res.status(200).json({ success: true, data: newPeople });
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

// POST JS
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  return res.status(201).json({ success: true, person: name });
});

module.exports = router;
