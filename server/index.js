const express = require('express');
require('dotenv').config();
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: (process.env.ENV_NODE = 'development' ? true : false),
  })
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`app is runing on ${process.env.PORT || 5000}`);
});
