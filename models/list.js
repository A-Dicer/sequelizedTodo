module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    thingsTODO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return List;
};