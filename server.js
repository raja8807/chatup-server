const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')

const schema = require('./schema/schema')
const root = require('./config/Chats')

const app = express()

app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}))

port = 5000
app.listen(port,(err)=>{
    if(err){throw err}
    console.log(`Server Started at ${port}`);
})