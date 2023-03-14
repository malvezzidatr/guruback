import { Sequelize } from "sequelize";

const sequelize = new Sequelize('guru', 'root', '!!Caio123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()

export default sequelize;