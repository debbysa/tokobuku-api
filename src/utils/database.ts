import { Sequelize } from "sequelize";
const host = process.env.HOST;
const username = process.env.USERNAME || "";
const password = process.env.PASSWORD;
const dbname = process.env.DBNAME || "";

// console.log(host, username, password, dbname);

const sequelize = new Sequelize(dbname, username, password, {
  host: host,
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate().then(() => {
  console.log("koneksi ke db tokobuku berhasil!");
});

export default sequelize;
