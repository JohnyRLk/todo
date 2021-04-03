module.exports={
    port:process.envPORT || 3002,
    database: process.env.DATBASE || 'mongodb://127.0.0.1:27017/todo-app'
}