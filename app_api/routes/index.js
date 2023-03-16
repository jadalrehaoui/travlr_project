const router = require('express').Router();

const tripsCtrl = require('../controllers/trips');
const roomsCtrl = require('../controllers/rooms');
/* GET home page. */
router.route('/trips')
.get(tripsCtrl.tripsList)
.post(tripsCtrl.addNewTrip)

router.route('/trips/:tripCode')
.get(tripsCtrl.tripFindByCode)
.put(tripsCtrl.updateTrip)



router.get('/rooms', roomsCtrl.roomsList);
router.get('/rooms/:roomCode', roomsCtrl.roomFindByCode);
module.exports = router;
