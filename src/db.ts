import { Sequelize } from "sequelize";
require('dotenv/config')

const sequelize = new Sequelize(
    `${process.env.DB_NAME}`,
    `${process.env.DB_USER}`, 
    `${process.env.DB_PASSWORD}`,
    {
        host: `${process.env.DB_HOST}`,
        dialect: 'mysql'
    }
);

sequelize.sync();
sequelize.authenticate();

export default sequelize;