export default {
	Mutation: {
		createMessage: async (parent, args, { models, user }) => {
			try {
				await models.Message.create({ ...args, owner: user.id });
				return true;
			} catch (e) {
				console.log('ERROR: ', e);
				return false;
			}
		},
	},
};
