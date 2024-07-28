const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(`postgresql://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATA_BASE_NAME}`,{
  
  logging: false, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
});

console.log(sequelize)

const connectDb=async()=>{

    try {
        await sequelize.authenticate()
        console.log('connected to database')
    } catch (error) {
        console.log('error',error)
        
    }

}

module.exports={sq:sequelize,connectDb}