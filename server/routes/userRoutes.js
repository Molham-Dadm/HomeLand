import express from 'express';
// import jwtCheck from '../config/auth0Config.js'
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFav, toFav } from '../controllers/userControllers.js';



const router = express.Router();



router.post('/register', createUser);
router.post('/book-visit/:id', bookVisit);
router.post('/bookings', getAllBookings);
router.post('/remove-booking/:id', cancelBooking);
router.post('/toFav/:rid', toFav);
router.post('/allFav', getAllFav);


export default router;
