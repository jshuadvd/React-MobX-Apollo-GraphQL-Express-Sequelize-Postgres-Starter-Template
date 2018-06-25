import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

import models from './models'

const types = fileLoader(path.join(__dirname, './schema'))

const typeDefs = mergeTypes(types, { all: true })

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

const app = express()

const PORT = 3000

const graphqlEndpoint = '/graphql'

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema: schema }))

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }))

models.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT)
})
