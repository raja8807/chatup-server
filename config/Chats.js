// const {GraphQLID} = require('graphql')

let chats = []
let senders = ["raja", "sender2"]
for(let i = 1; i<=20; i++){
    let currentMomet = new Date()
    let newChat = {
        // chatId : Math.floor(Math.random()*9000)*1000,
        chatId : i,
        sender : senders[Math.floor(Math.random()*2)],
        date : currentMomet.toLocaleDateString(),
        time : currentMomet.toLocaleTimeString(),
        message : `message ${i}`
    }
    chats.push(newChat)
}

var root = {
    getChats:()=>{
        return [...chats]
    }
}

module.exports = root