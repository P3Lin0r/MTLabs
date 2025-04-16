import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
    auth: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzQ0NzMwMTA3LCJleHAiOjE3NDQ3MzM3MDd9.dvSn4nfMOLlSkYM3u_velMQnG9N9vjg_rZw4kgU5-eU"
    }
});

socket.on("connect", () => {
    console.log("Connected to WebSocket server");
});

socket.on("connect_error", (err) => {
    console.error("Connection error:", err.message);
});

socket.on("orderCreated", (order) => {
    console.log("Order created:", order);
});

socket.on("orderUpdated", (order) => {
    console.log("Order updated:", order);
});
