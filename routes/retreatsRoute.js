const express = require('express');
const router = express.Router();
const Retreat =require('../models/retreatModel')

router.get('/api/retreats', async (req, res) => {
    try {
      const retreats = await Retreat.findAll();
      res.json(retreats)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  });
  
  module.exports = router