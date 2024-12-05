const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else {
            callback(new Error('Not allowed to CORS'), false)
        }
    },
    credentials: true, // Cho phép cookies
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Các phương thức cho phép
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-role'],
    optionSuccessStatus: 200,
}


module.exports = corsOptions
