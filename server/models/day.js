'use strict';

module.exports = (sequelize, DataTypes) => {
  const day = sequelize.define('day', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  day.associate = (models) => {
    day.belongsTo(models.trip, {
      foreignKey: 'tripId',
      onDelete: 'CASCADE',
    });
  };

  return day;
};