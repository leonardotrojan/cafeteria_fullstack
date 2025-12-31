import e from 'express';
import {  Model, DataTypes } from 'sequelize';

class OrderItem extends Model {
    static init(sequelize) {
        super.init(
            {
                quantity: DataTypes.INTEGER,
                price: DataTypes.DECIMAL(10, 2),
            },
            {
                sequelize,
                tableName: 'order-items'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Order, {
            foreignKey: 'order_id',
            as: 'order',
        });
        this.belongsTo(models.Product, {
            foreignKey: 'product_id',
            as: 'product',
        }
        );
    }
}

export default OrderItem;