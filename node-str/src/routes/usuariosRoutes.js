import express from "express";
import { createUsuario, getUsuario, putUsuario, deleteUsuario} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/:id", getUsuario);
router.post("/", createUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

export default router;
