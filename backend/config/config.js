require("dotenv").config();

// Fungsi pintar untuk membersihkan password dari .env
const getPassword = () => {
  const pwd = process.env.EXPRESS_DB_PASSWORD;
  // Jika tidak ada, nilainya string kosong, atau berisi tanda kutip mentah, kembalikan null
  if (!pwd || pwd === '""' || pwd === "''") {
    return null;
  }
  return pwd;
};

module.exports = {
  development: {
    username: process.env.EXPRESS_DB_USERNAME || "root",
    password: getPassword(), // Menggunakan fungsi pembersih password
    database: process.env.EXPRESS_DB_NAME,
    host: process.env.EXPRESS_DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.EXPRESS_DB_PORT || 3308,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.EXPRESS_DB_USERNAME || "root",
    password: getPassword(),
    database: process.env.EXPRESS_DB_NAME,
    host: process.env.EXPRESS_DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.EXPRESS_DB_PORT || 3308,
  },
  production: {
    username: process.env.EXPRESS_DB_USERNAME || "root",
    password: getPassword(),
    database: process.env.EXPRESS_DB_NAME,
    host: process.env.EXPRESS_DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.EXPRESS_DB_PORT || 3308,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
};