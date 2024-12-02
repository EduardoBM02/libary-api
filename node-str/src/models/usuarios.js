import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Usuario = sequelize.define("Usuario", {
  nome: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  endereco: { 
    type: DataTypes.STRING 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: false, unique: true 
  },
  telefone: { 
    type: DataTypes.STRING 
  },
},{
  timestamps: false,
});

export default Usuario;
