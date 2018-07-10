import React from 'react'
import { gql, graphql } from 'react-apollo'

const Home = () => (
	
)

const allUsersQuery = gql'
{
	allUsers {
		id
	}
}
'

export default ()