export default {
	Mutation: {
		createGroup: async (parent, args, { models }) => {
			try {
				await models.Group.create(args);
				return true;
			} catch (e) {
				console.log('ERROR: ', e);
				return false;
			}
		},
	},
};
