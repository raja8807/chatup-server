const { buildSchema } = require('graphql')

var schema = buildSchema(`
    type chat{
        chatId : ID
        sender : String
        date : String
        time : String
        message : String
    }

    type Query{
    getChats : [chat]
}
`)

module.exports = schema