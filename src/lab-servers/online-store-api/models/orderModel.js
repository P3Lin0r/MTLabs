import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Product from "./productModel.js";
import User from "./userModels.js"

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderRequest:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           description: Ідентифікатор товару для замовлення
 *         quantity:
 *           type: integer
 *           description: Кількість одиниць
 *       required:
 *         - product_id
 *         - quantity
 *       example:
 *         product_id: 2
 *         quantity: 30
 *
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Ідентифікатор замовлення
 *         user_id:
 *           type: integer
 *           description: Ідентифікатор користувача
 *         product_id:
 *           type: integer
 *           description: Ідентифікатор товару
 *         quantity:
 *           type: integer
 *           description: Кількість одиниць
 *         status:
 *           type: string
 *           description: Статус замовлення
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Дата створення замовлення
 *       example:
 *         id: 10
 *         user_id: 3
 *         product_id: 2
 *         quantity: 5
 *         status: "new"
 *         created_at: "2025-04-16T12:34:56.000Z"
 *
 *     OrderStatusUpdate:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: Новий статус замовлення
 *       required:
 *         - status
 *       example:
 *         status: "shipped"
 */

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'new',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'orders',
    timestamps: false
});

Order.belongsTo(User, { foreignKey: 'user_id' })
Order.belongsTo(Product, { foreignKey: 'product_id' })

export default Order;
