const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
// const { stringify } = require("qs");

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player1: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    player2: {
      type: DataTypes.STRING,
      require: true,
    },
    results: {
      type: DataTypes.STRING,
    },
    eventID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Event",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Match",
  }
);

module.exports = Match;
