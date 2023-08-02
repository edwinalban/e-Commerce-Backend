// Import express/routes/connection
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// Initialize app/PORT
const app = express();
const PORT = process.env.PORT || 3001;
// Initialize express for json objects/urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Initialize routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
.then(() => {
  app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});
