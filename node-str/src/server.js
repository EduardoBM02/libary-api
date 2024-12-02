import express from "express";
import dotenv from "dotenv";
import sequelize from "./database/database.js";
import livroRoutes from "./routes/livroRoutes.js";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import emprestimoRoutes from "./routes/emprestimoRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use("/livros", livroRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/emprestimo", emprestimoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
