const {sq} =require('../config/db')

const {DataTypes} =require("sequelize")
    const Booking = sq.define('Booking', {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      retreat_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      retreat_duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      booking_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })

    

Booking.sync().then(()=>{
    console.log('Booking Model synced')
})
    


module.exports=Booking
  