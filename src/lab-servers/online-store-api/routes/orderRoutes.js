import express from "express";
import OrderController from "../controllers/orderController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Створення та оновлення замовлень
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Створити нове замовлення
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderRequest'
 *     responses:
 *       201:
 *         description: Замовлення успішно створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       401:
 *         description: Не авторизований користувач
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.post("/", auth, OrderController.createOrder);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Оновити статус існуючого замовлення
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ідентифікатор замовлення
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderStatusUpdate'
 *     responses:
 *       200:
 *         description: Статус замовлення оновлено
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Order updated"
 *       401:
 *         description: Не авторизований користувач
 *       404:
 *         description: Замовлення не знайдено
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.put("/:id", OrderController.updateOrderStatus);

export default router;