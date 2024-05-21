// src/config/database.ts
import { Sequelize } from "sequelize";
const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DATABASE: "github_repos",
  PORT: "3306",
  DIALECT: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
};

const sequelize = new Sequelize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "mysql",
  }
);

export default sequelize;
