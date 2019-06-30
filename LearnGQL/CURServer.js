const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Message {
    id: ID!
    content: String
    author: String
  }

  input MessageInput {
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}
fakeDatabase = {
  counter: 1,
  1: {
    content: "this is the first content",
    author: "Arjun Nair"
  }
};
const rootValue = {
  getMessage: ({ id }) => fakeDatabase[id],
  createMessage: ({ input }) => {
    const id = fakeDatabase.counter;
    fakeDatabase[id] = input;
    fakeDatabase.counter++;
    return new Message(id, input);
  },
  updateMessage: ({ id, input }) => {
    fakeDatabase[id] = input;
    return new Message(id, input);
  }
};

const app = express();
app.use("/CUROperations", graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(4000, () => {
  console.log("------------------------------------");
  console.log("Server starte at localhost 4000");
  console.log("------------------------------------");
});
