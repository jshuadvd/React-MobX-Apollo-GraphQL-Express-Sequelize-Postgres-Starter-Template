export default `
	
	type User {
		id: Int!
		email: String!
		username: String!
		groups: [Group!]!
	}
	
	type Query {
		getUser(id: Int!): User!
		allUsers: [User!]
	}
	
	type Mutation {
		createUser(username: String!, email: String!, password: String!): User!
	}

`;
