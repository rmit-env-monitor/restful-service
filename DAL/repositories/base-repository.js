class BaseRepository {
    /**
     * Get all documents in a collection
     * @param  {Model<Document>} model
     */
    findAll(model) {
        return model.find().exec()
    }

    /**
     * Get a document with condition
     * @param  {Model<Document>} model
     * @param  {object} condition
     */
    findOne(model, condition) {
        return model.where(condition).findOne().exec()
    }

    /**
     * Edit a document
     * @param  {Model<Document>} model
     * @param  {number} id
     * @param  {object} value
     */
    edit(model, id, value) {
        return model.where({ _id: id }).update(value).exec()
    }

    /**
     * Create new document
     * @param  {Model<Document>} model
     */
    create(model) {
        return model.save()
    }
}

module.exports = new BaseRepository()