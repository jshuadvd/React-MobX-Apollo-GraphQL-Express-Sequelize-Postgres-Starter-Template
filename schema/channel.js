export default `
	
	type Channel {
		id: Int!
		name: String!
		messages: [Message!]!
		public: Boolean!
		users: [User!]!
	}
	
	type Mutation {
		createChannel(username: String!, email: String!, password: String!): User!
	}
	
`;
