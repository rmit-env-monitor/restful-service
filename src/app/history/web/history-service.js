const groupArray = require("group-array");
const moment = require("moment");

const recordRepo = require("../../../DAL/repositories/record-repository");
const constants = require("../../../utilities/constants");
const getAQIColor = require("../../../utilities/getAQIColor");

class HistoryService {
  async getHistoryData(city, district, startDate, endDate) {
    // Fetch data.
    const data = await recordRepo.getRecordsByStartEndDate(
      startDate,
      endDate,
      constants.MONGOOSE_QUERY.NO_ID
    );

    // Group by date.
    const recordsGroupByDate = groupArray(data, "date");

    // Get max AQI and return Google Chart format.
    const maxAqis = [["Date", "AQI", { role: "style" }]];
    const maxPM25s = [["Date", "PM 2.5", { role: "style" }]];
    const maxPM10s = [["Date", "PM 10", { role: "style" }]];
    for (let [key, value] of Object.entries(recordsGroupByDate)) {
      const date = moment(key).format("MMM DD YYYY");
      let maxAqi = value.map(data => data.aqiValues.aqi);
      let maxPM25 = value.map(data => data.aqiValues.pm25AQI);
      let maxPM10 = value.map(data => data.aqiValues.pm10AQI);
      maxAqi = Math.max(...maxAqi);
      maxPM25 = Math.max(...maxPM25);
      maxPM10 = Math.max(...maxPM10);

      maxAqis.push([date, maxAqi, getAQIColor(maxAqi)]);
      maxPM25s.push([date, maxPM25, getAQIColor(maxPM25)]);
      maxPM10s.push([date, maxPM10, getAQIColor(maxPM10)]);
    }

    return [maxAqis, maxPM25s, maxPM10s];
  }
}

module.exports = new HistoryService();
