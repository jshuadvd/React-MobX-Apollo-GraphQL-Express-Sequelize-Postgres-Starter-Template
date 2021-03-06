import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import models from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const app = express();

const PORT = 3000;

const graphqlEndpoint = '/graphql';

app.use(
	graphqlEndpoint,
	bodyParser.json(),
	graphqlExpress({
		schema,
		context: {
			models,
			user: {
				id: 1,
			},
		},
	}),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync({}).then(() => {
	app.listen(PORT);
});
