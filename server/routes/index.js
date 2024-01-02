const router = require("express").Router();
const jwtFilter = require("../jwt/jwtFilter");
const controllers = require("../controllers/index");
router.get("/hotel", jwtFilter, controllers.viewHotel); //
router.get("/hotel/:id", controllers.detailHotel); //
router.get("/results", controllers.searchHotel); // tim theo ten or dia_chi
router.post("/hotel", jwtFilter, controllers.addHotel); //
router.put("/hotel", jwtFilter, controllers.editHotel); //
router.delete("/hotel", jwtFilter, controllers.deleteHotel); //
router.get("/room/:idRoom/hotel/:idHotel", controllers.detailRoom); //
router.post("/room/hotel/:id", jwtFilter, controllers.addRoom); //
router.put("/room/hotel/:id", jwtFilter, controllers.editRoom); //
router.delete("/room/hotel/:id", jwtFilter, controllers.deleteRoom); //
router.post("/booking", jwtFilter, controllers.bookingRoom); //
router.delete("/booking/:id", jwtFilter, controllers.cancelBooking);
router.get("/booking/:id", jwtFilter, controllers.getBookingById); //
router.post("/review/hotel/", jwtFilter, controllers.reviewHotel); //
router.post("/code/password", controllers.codePassword); //
router.post("/reset/password/:token", controllers.resetPassword); //
module.exports = router;
