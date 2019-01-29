'use strict';

module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define('trip', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  trip.associate = (models) => {
    trip.hasMany(models.day, {
      foreignKey: 'tripId',
      as: 'days',
    });
  };

  return trip;
};