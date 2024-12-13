/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email : {
    type: Sequelize.STRING,
    allowNull: false
  },
  GPA: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/637627ca9eebde45ae5f394c_Underwater-Nun.jpeg"
  }

});

// Export the student model
module.exports = Student;