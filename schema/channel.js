export default `
	
	type Channel {
		id: Int!
		name: String!
		messages: [Message!]!
		public: Boolean!
		users: [User!]!
	}
	
	type Mutation {
		createChannel(groupID: Int!, name: String!, public: Boolean=false): Boolean!
	}
	
`;
