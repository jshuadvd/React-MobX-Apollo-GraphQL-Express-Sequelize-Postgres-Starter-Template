export default `
	
	type Channel {
		id: Int!
		name: String!
		messages: [Message!]!
		public: Boolean!
		users: [User!]!
	}
	
	type Message {
		id: Int!
		text: String!
		user: User!
		channel: Channel!
	}
	
	type User {
		id: Int!
		email: String!
		username: String!
		groups: [Group!]!
	}
	
	type Group {
		owner: User!
		members: [User!]!
		channels: [Channel!]!
	}
	
	type Query {
    	hi: String
  	}
`
