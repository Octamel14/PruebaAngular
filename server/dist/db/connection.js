"use strict";
// Option 3: Passing parameters separately (other dialects)
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('almacen', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
