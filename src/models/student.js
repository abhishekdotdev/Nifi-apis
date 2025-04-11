import { Model, DataTypes } from 'sequelize';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {typeof DataTypes} DataTypes
 */
export default (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Define associations here.
     * This method will be automatically called by models/index.js
     */
    static associate(models) {
      // define association here (e.g., Student.hasMany(models.Course))
    }
  }

  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );

  return Student;
};
