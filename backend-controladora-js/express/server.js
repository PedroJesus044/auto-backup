const express = require("express");
const cors = require("cors");

const app = express();

var whitelist = ['https://alter-auto-backup-express-git-pibarrap044-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      console.log('origin:', origin, 'not allowed')
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Muy permisivo
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   'Access-Control-Allow-Origin': 'https://alter-auto-backup-express-git-pibarrap044-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com',
//   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//   'Access-Control-Allow-Headers': 'Content-Type'
// }

//Muy permisivo
// var corsOptions = {
//   //'origin': '*',
//   //'Access-Control-Allow-Origin': 'https://console-openshift-console.apps.sandbox-m2.ll9k.p1.openshiftapps.com',
//   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//   'Access-Control-Allow-Headers': 'Content-Type'
// }

//Cors para un origen específico
console.log(corsOptions.origin);
app.use(cors(corsOptions));

//Cors para cualquier origen desconocido
//app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Holi" });
});

require("./app/routes/backups.routes")(app);
require("./app/routes/codigos.routes")(app);
require("./app/routes/metadatas.routes")(app);
require("./app/routes/file_traces.routes")(app);
require("./app/routes/backup_traces.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/sessions.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});