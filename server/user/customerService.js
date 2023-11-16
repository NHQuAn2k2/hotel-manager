const Hotel = require("../models/hotel");
module.exports = {
  searchHotel: (data) => {
    Hotel.findOne();
  },
};
