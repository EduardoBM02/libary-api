import express from "express";
import { createEmprestimo, getEmprestimo, putEmprestimo, deleteEmprestimo} from "../controllers/emprestimoController.js";

const router = express.Router();

router.get("/:id", getEmprestimo);
router.post("/", createEmprestimo);
router.put("/:id", putEmprestimo);
router.delete("/:id", deleteEmprestimo);

export default router;
