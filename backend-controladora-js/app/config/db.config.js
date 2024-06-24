module.exports = {
  HOST: "localhost",
  USER: "auto-backup",
  PASSWORD: "auto-backup",
  DB: "auto-backup",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
