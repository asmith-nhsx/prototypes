const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/rocket-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var rocketType = req.session.data['rocket-type']

  // Check whether the variable matches a condition
  if (rocketType == "Falcon Heavy"){
    // Send user to ineligible page
    res.redirect('/ineligible')
  } else if (rocketType == "Skylark") {
    // Send user to enter more details
    res.redirect('/rocket-details')
  } else {
    // Send user to enter more details
    res.redirect('/launch-date')
  }

})

module.exports = router
