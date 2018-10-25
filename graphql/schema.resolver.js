import * as gqls from "./**/schema/*.gql";
import * as schema from "./schema.gql";
import * as resolvers from "./**/*.resolver.js";
import { ApolloServer } from "apollo-server-express";
import config from "../config";
// import { decodeToken } from "../libs/Auth";

const port = config().port;

const graphAuthenicate = async token => {
  try {
    // const user = await decodeToken(token);
    return user;
  } catch (error) {
    return error;
  }
};

const GraphQLSchema = new ApolloServer({
  typeDefs: [schema, ...Object.keys(gqls).map(key => gqls[key])],
  resolvers: Object.keys(resolvers).map(r => resolvers[r]),
  playground: {
    endpoint: `http://localhost:${port}/graphql`,
    settings: {
      "editor.theme": "dark",
      "editor.cursorShape": "line" // possible values: 'line', 'block', 'underline'
    }
  },
  context: ({ req }) => {
    let token = req.headers["x-access-token"];
    const user = graphAuthenicate(token);
    return user || null;
  }
});

export default GraphQLSchema;
