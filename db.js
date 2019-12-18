const Sequelize = require("sequelize");

const sequelize = new Sequelize("Workout-Challenge", "postgres", "password", {
  host: "localhost",
  dialect: "postgres"
});

sequelize.authenticate().then(
  function() {
    console.log("connected to workoutlog postgres database");
  },
  function(err) {
    console.log(err);
  }
);
module.exports = sequelize;
