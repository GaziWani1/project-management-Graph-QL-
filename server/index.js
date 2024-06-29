const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: (process.env.ENV_NODE = 'development' ? true : false),
  })
);
if (connectDb())
  app.listen(process.env.PORT || 5000, () => {
    console.log(`app is runing on ${process.env.PORT || 5000}`);
  });
else console.log('db is not connected');
