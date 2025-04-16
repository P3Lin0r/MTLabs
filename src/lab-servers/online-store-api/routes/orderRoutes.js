import express from "express";
import OrderController from "../controllers/orderController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, OrderController.createOrder);
router.put("/:id", OrderController.updateOrderStatus);

export default router;