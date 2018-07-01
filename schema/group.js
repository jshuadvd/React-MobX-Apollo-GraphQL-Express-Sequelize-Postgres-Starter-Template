export default `
	
	type Group {
		owner: User!
		members: [User!]!
		channels: [Channel!]!
	}
	
	type Mutation {
		createGroup(groupID: Int!, name: String!, public: Boolean=false): Boolean!
	}

`;
