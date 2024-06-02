// src/models/employee.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class MergeRequest extends Model {
  public id!: number;
  public project_id!: number;
  public repository_id!: number;
  public salary!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

MergeRequest.init(
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
    tableName: 'merge-requests',
  }
);

export default MergeRequest;
