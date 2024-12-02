import { Sequelize } from "sequelize";


const sequelize = new Sequelize('biblioteca', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // Porta padrão do MySQL
});

export default sequelize;
