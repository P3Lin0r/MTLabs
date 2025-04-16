import Product from "../models/productModel.js";

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await Product.findAll();
            res.json(products)
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                res.status(404).json({ message: `No product found with id ${req.params.id}` });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async addProduct(req, res) {
        const {
            title,
            description,
            price,
            stock
        } = req.body;

        try {
            const newProduct = await Product.create({ title, description, price, stock })
            res.status(201).json({ message: "Product added", id: newProduct.id }); //
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        const {
            title,
            description,
            price,
            stock
        } = req.body;
        try {
            const [updatedRows] = await Product.update(
                { title, description, price, stock },
                { where: { id: req.params.id } }
            );
            if (updatedRows > 0) {
                res.json({ message: "Product updated" });
            }
            else {
                res.status(404).json({ message: `No product found with id ${req.params.id}` });
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const deletedRows = await Product.destroy({ where: { id: req.params.id } });
            if (deletedRows > 0) {
                res.json({ message: "Product deleted" });
            }
            else {
                res.status(404).json({ message: `No product found with id ${req.params.id}` });
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ProductController;