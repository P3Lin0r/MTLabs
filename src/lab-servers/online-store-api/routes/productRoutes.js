import express from "express";
import ProductController from "../controllers/productController.js"

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: CRUD для товарів
 */
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Отримати список всіх товарів
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Масив товарів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *   post:
 *     summary: Створити новий товар
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Товар успішно створено
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
 *                 message: "Product added"
 *                 id: 5
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Отримати товар за ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID товару
 *     responses:
 *       200:
 *         description: Об’єкт товару
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Товар не знайдено
 *   put:
 *     summary: Оновити дані товару
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID товару
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Товар успішно оновлено
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Product updated"
 *       404:
 *         description: Товар не знайдено
 *   delete:
 *     summary: Видалити товар
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID товару
 *     responses:
 *       200:
 *         description: Товар успішно видалено
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Product deleted"
 *       404:
 *         description: Товар не знайдено
 */

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.addProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;