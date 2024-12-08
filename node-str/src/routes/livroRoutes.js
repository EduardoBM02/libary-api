import express from "express";
import { createLivro, getLivro, putLivros, deleteLivros, getLivros} from "../controllers/livroController.js";

const router = express.Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.post("/", createLivro);
router.put("/:id", putLivros);
router.delete("/:id", deleteLivros);

export default router;
