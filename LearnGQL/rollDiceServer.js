const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
 type RandomDie {
   numSides: Int!
   rollOnce: Int!
   roll(numRolls: Int!): [Int]
 }
 type Query {
   getDie(numSides : Int): RandomDie
  }
`);

class RandomDie {
  constructor(numSides) {
    this.numSides = numSides;
  }
  rollOnce() {
    return Math.floor(Math.random() * this.numSides);
  }
  roll({ numRolls }) {
    let op = [];
    for (let i = 0; i < numRolls; i++) {
      op.push(this.rollOnce());
    }
    return op;
  }
}

const rootValue = {
  getDie: ({ numSides }) => new RandomDie(numSides)
};

var app = express();
app.use(
  "/rollDiceGQL",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);
app.listen(4000);
console.log("------------------------------------");
console.log("Server started localhost:4000/rollDiceGQL");
console.log("------------------------------------");
