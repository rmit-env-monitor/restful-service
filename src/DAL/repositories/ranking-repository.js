const baseRepo = require('./base-repository')
const rankingModel = require('../models/ranking-model')

class RankingRepository {
    getLatestRankingRecord(condition, sort, limit, select) {
        return baseRepo.findManyLimit(rankingModel, condition, sort, limit, select)
    }
}

module.exports = new RankingRepository()