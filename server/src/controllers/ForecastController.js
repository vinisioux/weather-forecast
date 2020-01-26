const axios = require("axios");
const replaceChar = require("../utils/rplchar");
require("dotenv").config();

module.exports = {
  async index(req, res) {
    let { state, city } = req.query;
    const resCity = city;

    city = replaceChar(city);
    try {
      const get_city = await axios.get(
        `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${city}&state=${state}&token=${process.env.CLIMATEMPO_API_KEY}`
      );

      const city_id = get_city.data[0].id;

      const response = await axios.get(
        `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${city_id}/days/15?token=${process.env.CLIMATEMPO_API_KEY}`
      );

      let days = [];

      response.data.data.map(day =>
        days.push({
          day: day.date_br,
          thermal_sensation: day.thermal_sensation
        })
      );

      return res.status(200).json({ days, resCity });
    } catch (err) {
      console.log(err);
      return res.json({ error: "Locale not found" });
    }
  }
};
