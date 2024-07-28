const express = require('express')
const router = express.Router()
const { Op } = require('sequelize')
const Booking = require('../models/bookingModel')



router.get('/api/bookings', async (req, res) => {
  console.log('booking')
  try {
      const bookings = await Booking.findAll()
      res.json(bookings)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
})


router.post('/api/booking', async (req, res) => {
  try {
    const { user_id, retreat_id } = req.body

    const existingBooking = await Booking.findOne({
      where: {
        [Op.and]: [{ user_id }, { retreat_id }],
      },
    })

    if (existingBooking) {
      return res.status(400).json({ error: 'Retreat already booked for the user' })
    }

    const newBooking = await Booking.create(req.body)
    res.status(201).json(newBooking)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})



module.exports = router
