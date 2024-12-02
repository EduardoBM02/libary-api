import express from "express";
import { createLivro, getLivros, putLivros, deleteLivros} from "../controllers/livroController.js";

const router = express.Router();

router.get("/:id", getLivros);
router.post("/", createLivro);
router.put("/:id", putLivros);
router.delete("/:id", deleteLivros);

export default router;
