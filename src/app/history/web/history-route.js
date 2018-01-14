const router = require("express").Router();

const historyService = require("./history-service");

module.exports = app => {
  router.get("/history", (req, res, next) => {
    const city = req.query.city;
    const district = req.query.district;
    const startDate = parseInt(req.query.startDate);
    const endDate = parseInt(req.query.endDate);
    historyService
      .getHistoryData(null, null, startDate, endDate)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json("Internal server error");
        next(new Error(err.message));
      });
  });

  app.use("/api/web", router);
};
