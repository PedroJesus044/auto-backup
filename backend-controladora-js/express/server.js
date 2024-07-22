const express = require("express");
const cors = require("cors");

const app = express();

var whitelist = ['https://auto-backup-vuejs-git-or15.apps.ocpprod.pjedomex.gob.mx', 'http://auto-backup-vuejs-git:8080', 'http://10.22.165.29:8080', 'http://auto-backup-vuejs-1:8081', 'https://auto-backup-express-git-pibarrap044-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS. Origin: ' + origin))
    }
  }
}

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