import express from "express";
import verifyToken from '../middleware/auth_middleware.js'
import { createEnseignant, DeleteEnseignant, FindOneEnseignant, ListEnseignant, UpdateEnseignant } from "../controller/enseignant_controller.js";

const router = express.Router();


// CREATE
router.post("/create", verifyToken, createEnseignant);


// READ ALL
router.get("/", verifyToken, ListEnseignant);


// READ ONE
router.get("/:id", verifyToken, FindOneEnseignant);


// UPDATE
router.put("/:id", verifyToken, UpdateEnseignant);


// DELETE
router.delete("/:id", verifyToken, DeleteEnseignant);

export default router;