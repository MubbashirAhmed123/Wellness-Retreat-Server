const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.DATA_BAS_NAME, 'postgres', process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres'
});


const connectDb=async()=>{

    try {
        await sequelize.authenticate()
        console.log('connected to database')
    } catch (error) {
        console.log('error',error)
        
    }

}

module.exports={sq:sequelize,connectDb}