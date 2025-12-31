import {  Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.cjs';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                description: DataTypes.STRING,
                price: DataTypes.DECIMAL(10, 2),   
            },
            {
                sequelize,
                tableName: 'products'
            }
        )
    }
}

export default Product;