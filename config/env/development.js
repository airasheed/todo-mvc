
//Set the 'development' environment configuartion object

module.exports = {
    db: process.env.PROD_MONGODB || 'mongodb://localhost:27017/todo',
    sessionSecret : '59B93087-78BC-4EB9-993A-A61FC844F6C9'
};