const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const { stringify } = require("qs");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tournament: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standings: 
      {
        type: DataTypes.STRING, 
        allowNull: false,
      },
    character: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< HEAD
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }

=======
>>>>>>> 8ba5f797750c2021673b65ac1ae78dd620c65635
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
