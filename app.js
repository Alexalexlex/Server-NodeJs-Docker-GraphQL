const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const app = express();
const schema = require('./graphql/schema')
const controllers = require('./graphql/controllers')

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('<h1 style="text-align:center; padding:20%">Hello, its Docker in touch!</h1>')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: controllers,
    graphiql: true,
}));

app.listen(8080, () => console.log('Now browse to localhost:8080/graphql'));