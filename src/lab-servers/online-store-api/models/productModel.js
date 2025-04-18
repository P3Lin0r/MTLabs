import { DataTypes } from "sequelize";
import sequelize from "../db.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Унікальний ідентифікатор товару
 *         title:
 *           type: string
 *           description: Назва товару
 *         description:
 *           type: string
 *           description: Опис товару
 *         price:
 *           type: number
 *           format: float
 *           description: Ціна товару
 *         stock:
 *           type: integer
 *           description: Кількість одиниць на складі
 *       required:
 *         - title
 *         - price
 *       example:
 *         id: 1
 *         title: "Cheese Radamer"
 *         description: "If you are the kind of person who cannot imagine life without milk and milk products, this cheese is for you. Do you prefer to have a glass of milk, fresh kefir, cottage cheese with fruit or sour cream for dinner? Then you should try the radiator."
 *         price: 83.90
 *         stock: 20
 */
const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    tableName: 'products',
    timestamps: false,
});

export default Product;