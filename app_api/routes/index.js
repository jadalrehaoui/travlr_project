const router = require('express').Router();

const tripsCtrl = require('../controllers/trips');
const roomsCtrl = require('../controllers/rooms');
/* GET home page. */
router.get('/trips', tripsCtrl.tripsList);
router.get('/trips/:tripCode', tripsCtrl.tripFindByCode);

router.get('/rooms', roomsCtrl.roomsList);
router.get('/rooms/:roomCode', roomsCtrl.roomFindByCode);
module.exports = router;
