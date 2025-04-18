import { DataTypes } from "sequelize";
import sequelize from "../db.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRegistration:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Ім'я користувача
 *         email:
 *           type: string
 *           format: email
 *           description: Пошта користувача
 *         password:
 *           type: string
 *           format: password
 *           description: Пароль користувача
 *       required:
 *         - username
 *         - email
 *         - password
 *       example:
 *         username: "Green zxc"
 *         email: "green@email.com"
 *         password: "12P3o4_567!JJ8"
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Електронна пошта користувача
 *         password:
 *           type: string
 *           format: password
 *           description: Пароль користувача
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: "green@email.com"
 *         password: "12P3o4_567!JJ8"
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT токен для автентифікації
 *       example:
 *         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
 */
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "users",
    timestamps: false
});

export default User;