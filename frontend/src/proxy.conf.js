
const PROXY_CONFIG = [
    {
        context:['/api'],
        target: 'https://api-spring-book.onrender.com/',
        secure:false,
        logLevel:'debug',
        changeOrigin:true,
        pathRewrite:{'^/api':''}
    }
];


module.exports = PROXY_CONFIG;

