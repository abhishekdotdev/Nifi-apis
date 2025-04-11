import { Model, DataTypes } from 'sequelize';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {typeof DataTypes} DataTypes
 */

export default (sequelize, DataTypes) => {
  class myfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  myfile.init(
    {
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mimetype: {
        type: DataTypes.STRING,
      },

      size: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'myfile',
    }
  );
  return myfile;
};
