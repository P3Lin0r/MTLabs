import Order from "../models/orderModel.js"

class OrderController {

    static async createOrder(req, res) {
        const { product_id, quantity } = req.body;
        const userId = req.user.id;

        try {
            const newOrder = await Order.create({ user_id: userId, product_id, quantity });
            const createdOrder = await Order.findByPk(newOrder.id, { include: ["Product"] });

            req.io.to(`user_${userId}`).emit('orderCreated', createdOrder);
            res.status(201).json(createdOrder);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async updateOrderStatus(req, res) {
        const { status } = req.body;

        try {
            const [updatedRows] = await Order.update(
                { status },
                { where: { id: req.params.id } }
            );
            if (updatedRows > 0) {
                const updatedOrder = await Order.findByPk(req.params.id, { include: ["User"] });

                req.io.to(`user_${updatedOrder.User.id}`).emit('orderUpdated', updatedOrder);
                res.json({ message: "Order updated" });
            }
            else {
                req.status(404).json({ message: `No order found with id ${req.params.id}` });
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default OrderController;