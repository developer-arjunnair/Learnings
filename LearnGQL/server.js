const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    name: String
    id: Int
  }
`);
const root = {
  hello: () => "hello",
  id: () => 1,
  name: () => "Arjun"
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log("------------------------------------");
console.log("runnin gql server at localhost:4000/graphql");
console.log("------------------------------------");
