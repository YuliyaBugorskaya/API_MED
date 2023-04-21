const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Priem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      // define association here
    }
  }
  Priem.init({
    userId: DataTypes.INTEGER,
    specialist: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Priem',
  });
  return Priem;
};
