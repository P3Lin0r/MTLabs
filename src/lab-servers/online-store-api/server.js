import express, { json } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import http from "http";

import productsRouts from "./routes/productRoutes.js";
import authRouts from "./routes/authRoutes.js";
import ordersRouts from "./routes/orderRoutes.js";
import initWebSocket from "./websocket.js"

import sequelize from './db.js';

dotenv.config({ path: ".env" });
const PORT = process.env.SERVER_PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = initWebSocket(server);

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(json());
app.use(cors());

app.use("/api/products", productsRouts);
app.use("/api/auth", authRouts);
app.use("/api/orders", ordersRouts);

app.get("/", (req, res) => {
    res.send("Online store OPENED");
});

sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        server.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`)
        });
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });




// //прошлый сервер
// import express, { json, text } from 'express';
// import cors from 'cors';
// import dotenv from "dotenv";
// import http from "http";

// import productsRouts from "./routes/products.js";
// import authRouts from "./routes/auth.js";
// import ordersRouts from "./routes/orders.js";
// import authenticate from "./middleware/auth.js"
// import initWebSocket from "./websocket.js"

// dotenv.config({ path: ".env" });
// const PORT = process.env.SERVER_PORT || 5000;

// const app = express();
// const server = http.createServer(app);
// const io = initWebSocket(server);

// app.use((req, res, next) => {
//     req.io = io;
//     next();
// });

// app.use(json());
// app.use(cors());

// app.use("/products", productsRouts);
// app.use("/auth", authRouts);
// app.use("/orders", authenticate, ordersRouts);

// app.get("/", (req, res) => {
//     res.send("Online store OPENED");
// });

// server.listen(PORT, () => {
//     console.log(`Server started on http://localhost:${PORT}`)
// })







//начальный сервер
// import express, { json } from 'express';
// import cors from 'cors';
// import dotenv from "dotenv";
// import http from "http";
// import sequelize from './db.js';

// import productsRouts from "./routes/productRoutes.js";

// dotenv.config({ path: ".env" });
// const PORT = process.env.SERVER_PORT || 5000;

// const app = express();
// app.use(json());
// app.use(cors());

// app.use("/products", productsRouts);

// app.get("/", (req, res) => {
//     res.send("Online store OPENED");
// });

// sequelize.sync()
//     .then(() => {
//         console.log('Database synced successfully');
//         server.listen(PORT, () => {
//             console.log(`Server started on http://localhost:${PORT}`)
//         });
//     })
//     .catch(err => {
//         console.error('Error syncing database:', err);
//     });