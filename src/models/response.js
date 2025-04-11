import { Model, DataTypes } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Response.init(
    {
      status: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.INTEGER,
      },
      message: {
        type: DataTypes.STRING,
      },

      method: {
        type: DataTypes.STRING,
      },

      data: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: 'Response',
    }
  );
  return Response;
};
