import express from "express"
import AuthController from "../controllers/authController.js"

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Реєстрація та логін користувачів
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Логін користувача та отримання JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Успішна автентифікація
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Невірний email або пароль
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.post("/login", AuthController.login);
/**
 * @swagger
 * /auth/registration:
 *   post:
 *     summary: Реєстрація нового користувача
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegistration'
 *     responses:
 *       201:
 *         description: Користувач успішно зареєстрований
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 *               example:
 *                 message: "User is registered"
 *                 id: 3
 *       400:
 *         description: Некоректні вхідні дані
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.post("/registration", AuthController.registration);

export default router;