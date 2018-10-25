import { createServer } from "http";
import schema from "./schema.resolver";

const GraphQL = app => {
  const server = createServer(app);
  schema.applyMiddleware({
    app
  });
  schema.installSubscriptionHandlers(server);
  return server;
};

export default GraphQL;
