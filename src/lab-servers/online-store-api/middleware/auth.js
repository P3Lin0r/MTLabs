import jwt from 'jsonwebtoken';
import User from "../models/userModels.js"

export default async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: "Not authorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findByPk(decoded.id);
        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = user;
        next();
    }
    catch (err) {
        console.error(err.message);
        res.status(401).json({ error: "Invalid token" });
    }
};