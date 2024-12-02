import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Usuario from "./usuarios.js";
import Livro from "./livros.js";

const Emprestimo = sequelize.define("Emprestimo", {
  data_emprestimo: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },
  data_devolucao: { 
    type: DataTypes.DATE 
  },
},{
  timestamps: false,
});

Emprestimo.belongsTo(Usuario, { foreignKey: "id_usuario" });
Emprestimo.belongsTo(Livro, { foreignKey: "id_livro" });

export default Emprestimo;
