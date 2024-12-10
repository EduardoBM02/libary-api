import express from "express";
import { createEmprestimo, getEmprestimo, putEmprestimo, deleteEmprestimo, getEmprestimos} from "../controllers/emprestimoController.js";

const router = express.Router();

router.get("/", getEmprestimos);
router.get("/:id", getEmprestimo);
router.post("/", createEmprestimo);
router.put("/:id", putEmprestimo);
router.delete("/:id", deleteEmprestimo);

export default router;
