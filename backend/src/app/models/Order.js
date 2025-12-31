import {  Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.cjs';

class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                status: DataTypes.STRING,
                total: DataTypes.DECIMAL(10, 2),
            },
            {
                sequelize,
                tableName: 'orders'
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.OrderItem, {
            foreignKey: 'order_id',
            as: 'items',
        })
    }
}