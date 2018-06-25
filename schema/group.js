export default `
	
	type Group {
		owner: User!
		members: [User!]!
		channels: [Channel!]!
	}

`
