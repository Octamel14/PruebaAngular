// Option 3: Passing parameters separately (other dialects)

import { Sequelize } from "sequelize";
const sequelize = new Sequelize('almacen', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;