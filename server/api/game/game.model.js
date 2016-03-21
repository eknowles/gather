'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Game', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    map: DataTypes.STRING,
    demo: DataTypes.STRING,
    info: DataTypes.STRING,
    a1: DataTypes.INTEGER,
    b1: DataTypes.INTEGER,
    a2: DataTypes.INTEGER,
    b2: DataTypes.INTEGER
  });
}
