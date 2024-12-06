const express = require("express");
const cookieParser = require("cookie-parser");
const {createProxyMiddleware} = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Mảng các miền được phép
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Các phương thức HTTP được phép
    allowedHeaders: ['Content-Type', 'Authorization'],  // Các header được phép
    credentials: true,  // Cho phép gửi cookie qua yêu cầu CORS
};

const verifyJWT = require("./middleware/verifyJWT");

// thêm vào gây lỗi
// build-in middleware to handle urlencode from data
// app.use(express.urlencoded({extended: true}));

// build-in middleware for json
// app.use(express.json());

// middleware for cookies
app.use(cookieParser());

app.use(cors(corsOptions));

const routes = [
    {
        context: "/api/vouchers",
        target: "http://localhost:8002",
        changeOrigin: true,
        pathRewrite: {"^/api/vouchers": "/api/vouchers"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
        context: "/api/statistics",
        target: "http://localhost:8002",
        changeOrigin: true,
        pathRewrite: {"^/api/statistics": "/api/statistics"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    // {
    //     context: "/refresh-token",
    //     target: "http://localhost:8002",
    //     changeOrigin: true,
    //     pathRewrite: { "^/refresh-token": "/refresh-token" },
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    // },
    {
        context: "/logout",
        target: "http://localhost:8002",
        changeOrigin: true,
        pathRewrite: {"^/logout": "/logout"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
        context: "/api/installments",
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {"^/api/installments": "/api/installments"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
        context: "/api/users",
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {"^/api/users": "/api/users"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    // {
    //     context: "/api/laptops",
    //     target: "http://localhost:8080",
    //     changeOrigin: true,
    //     pathRewrite: {"^/api/laptops": "/api/laptops"},
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    // },
    {
        context: "/api/brands",
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {"^/api/brands": "/api/brands"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
        context: "/api/orders",
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {"^/api/orders": "/api/orders"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
    {
        context: "/api/laptops",
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {"^/api/laptops": "/api/laptops"},
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
];

app.use("/api/laptops", (req, res, next) => {
    if (req.method === "GET") {
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
            pathRewrite: { "^/api/laptops": "/api/laptops" },
        })(req, res, next);
    }else {
        next()
    }
});

app.use("/api/statistics/products",
        createProxyMiddleware({
            target: "http://localhost:8002",
            changeOrigin: true,
            pathRewrite: { "^/api/statistics/products": "/api/statistics/products" },

}));

app.use('/auth', createProxyMiddleware({
    target: "http://localhost:8002",
    pathRewrite: { "^/auth": "/auth" },
    changeOrigin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use('/refresh-token', createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
    pathRewrite: { "^/refresh-token": "/refresh-token" },
}))

app.use(verifyJWT)

routes.forEach((route) => {
    app.use(
        route.context,
        createProxyMiddleware({
            target: route.target,
            pathRewrite: route.pathRewrite,
            changeOrigin: true,
            onProxyReq: (proxyReq, req) => {
                // Gắn header từ verifyJWT vào proxy request
                if (req.headers["x-user-role"]) {
                    proxyReq.setHeader("x-user-role", req.headers["x-user-role"]);
                }
            },
            methods: route.methods,
        })
    );
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Gateway server is running on port ${PORT}`);
});
