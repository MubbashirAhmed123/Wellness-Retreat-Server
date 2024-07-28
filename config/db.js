const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(`postgresql://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATA_BAS_NAME}`,{
 
  logging: false, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
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