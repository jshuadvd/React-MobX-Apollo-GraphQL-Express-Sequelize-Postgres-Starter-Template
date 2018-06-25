// var fs = require('fs')
// var path = require('path')
import Sequelize from 'sequelize';
// var basename = path.basename(__filename)
// var env = process.env.NODE_ENV || 'development'
// var config = require(__dirname + '/../config/config.js')[env]
const Op = Sequelize.Op;
const sequelize = new Sequelize('db_template', 'tester', 'test_password', {
	operatorsAliases: false,
	dialect: 'postgres',
	define: {
		underscored: true,
	},
});

const models = {
	User: sequelize.import('./user'),
	Group: sequelize.import('./group'),
	Channel: sequelize.import('./channel'),
	Message: sequelize.import('./message'),
};

Object.keys(models).forEach(modelName => {
	if (models[modelName].associate) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
