module.exports = {
    HOST: "app-database-1",
    USER: "postgres",
    PASSWORD: "1284",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };