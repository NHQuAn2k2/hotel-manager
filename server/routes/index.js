const router = require("express").Router();
const controllers = require("../controllers/index");
router.get("/hotel", controllers.viewHotel); //
router.get("/hotel/:id", controllers.detailHotel); //
router.get("/results", controllers.searchHotel); // tim theo ten or dia_chi
router.post("/hotel", controllers.addHotel); //
router.put("/hotel", controllers.editHotel); //
router.delete("/hotel", controllers.deleteHotel); //
router.get("/room/:idRoom/hotel/:idHotel", controllers.detailRoom); //
router.post("/room/hotel/:id", controllers.addRoom); //
router.put("/room/hotel/:id", controllers.editRoom); //
router.delete("/room/hotel/:id", controllers.deleteRoom); //
router.post("/booking", controllers.bookingRoom); //
router.post("/review/hotel/", controllers.reviewHotel); //
module.exports = router;
