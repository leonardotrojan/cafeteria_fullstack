import sequelize, { Sequelize } from 'sequelize';
import dbConfig from '../../config/database.cjs';
import Product from '../app/models/Product.js';
import Order from '../app/models/Order.js';
import OrderItem from '../app/models/OrderItem.js';

const models = [Product, Order, OrderItem];

class Database {
    constructor() {
        this.connection = new Sequelize(dbConfig);
        this.init();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
}

export default new Database();