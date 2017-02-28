const baseRepo = require('./base-repository')
const chatModel = require('../models/chat-model')

class ChatRepository {
    addMessage(message) {
        var newMessage = new chatModel(message)
        return baseRepo.create(newMessage)
    }

    getChatHistory() {
        return baseRepo.findAll(chatModel)
    }
}

module.exports = new ChatRepository()