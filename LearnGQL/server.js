let { graphql, buildSchema } = require("graphql");

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

graphql(schema, "{hello,name,id}", root).then(
  ({ data: { hello, name, id } }) => {
    console.log(`${hello} ${name} your id is ${id}`);
  }
);
