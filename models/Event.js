// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");
// // const { stringify } = require("qs");

// class Event extends Model {}

// Event.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     matches: [
//       {
//         type: DataTypes.INTEGER,
//         references: {
//           model: "Match",
//           key: "id",
//         },
//       },
//     ],
//     winner: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Event",
//   }
// );

// module.exports = Event;
