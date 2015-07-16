var express = require('express');
var router = express.Router();

router.post('/login');
router.get('/logout');

router.get('/auth/facebook');
router.get('/auth/facebook/callback');

/**
 * Endpoint to get information about logged in user
 */
router.get('/user_info', function(req, res) {
  /**
   * Check if user is logged in and return an error if not
   */
  // if (!req.isAuthenticated) {
  //   res.json({'error':'Endpoint requires login.'});
  //   return;
  // }

  /**
  * Object returned from endpoint
  */
  // var data = {
  //   'first_name': req.user.first_name,
  //   'last_name': req.user.last_name,
  //   'profile_image' : req.user.profile_image,
  // };

  // Mock data
  var data = {
    // 'id': 1,
    'first_name': 'Randy',
    'last_name': 'Savage',
    'profile_image' : 'http://img.bleacherreport.net/img/images/photos/001/866/715/randy_savage_crop_north.png?w=377&h=251&q=75',
  };
  res.json(data);
});

router.get('/challenge/user');
router.get('/challenge/public');
router.get('/challenge/:id');
router.post('/challenge');

module.exports = router;
