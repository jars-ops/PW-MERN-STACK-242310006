'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// ==========================================
// SATPAM PEMBERSIH CONFIG (Mencegah Bug XAMPP)
// ==========================================
if (!config.password || config.password === '""' || config.password === "''") {
  config.password = null; // Memastikan (using password: NO)
}

// Memaksa port dibaca sebagai angka, dan default ke 3308 jika tidak terbaca
config.port = config.port ? parseInt(config.port, 10) : 3308;
// ==========================================

let sequelize; // Baris ini hanya boleh ada SATU di seluruh file

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;