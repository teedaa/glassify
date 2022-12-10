const express = require('express');
const path = require('path');
// const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);
// app.use(express.static(path.join(__dirname, '../client/build')));

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

startApolloServer();