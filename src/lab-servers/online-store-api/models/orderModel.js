import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Product from "./productModel.js";
import User from "./userModels.js"

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
