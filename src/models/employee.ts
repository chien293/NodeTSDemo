// src/models/employee.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Employee extends Model {
  public id!: number;
  public name!: string;
  public position!: string;
  public salary!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    position: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'employees',
  }
);

export default Employee;
