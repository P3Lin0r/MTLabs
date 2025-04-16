import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/userModels.js"

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                res.status(401).json({ message: "No user with this email" })
            }

            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                return res.status(401).json({ message: "The password is wrong" });
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.json({ token });
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async registration(req, res) {
        const { username, email, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, email, password: hashedPassword })
            res.status(201).json({ message: "User is registered", id: `User's id: ${newUser.id}` })
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default AuthController