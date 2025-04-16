import { Server } from "socket.io";
import jwt from "jsonwebtoken"

const initWebSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token) {
            console.log("WebSocket authentication failed: No token provided");
            return next(new Error("Authentication error"));
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            socket.userId = decoded.id;
            console.log(`WebSocket authenticated: User ID ${decoded.id}`);
            next();
        }
        catch (err) {
            console.log("WebSocket authentication failed:", err.message);
            return next(new Error("Authentication error"));
        }
    })

    io.on("connection", (socket) => {
        console.log(`User  ${socket.userId} connected`);
        socket.join(`user_${socket.userId}`);

        socket.on("disconnect", () => {
            console.log(`User  ${socket.userId} disconnected`);
        });
    });
    return io;
};

export default initWebSocket;