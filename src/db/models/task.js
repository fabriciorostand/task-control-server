import { DataTypes } from 'sequelize';
import { db } from '../db/connection.js';

const Task = db.define(
  'task',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true, // cria colunas createdAt e updatedAt automaticamente
  }
);

export default Task;