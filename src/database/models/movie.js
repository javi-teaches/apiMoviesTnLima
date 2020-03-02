module.exports = (sequelize, dataTypes) => {
	const movie = sequelize.define('movies', {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: dataTypes.STRING,
		rating: dataTypes.DECIMAL,
		awards: dataTypes.INTEGER,
		release_date: {
			type: dataTypes.DATE
		},
		length: {
			type: dataTypes.INTEGER
		},
		genre_id: {
			type: dataTypes.INTEGER
		},
	});

	movie.associate = models => {
		// movie.belongsTo(models.genres, {
		// 	as: 'genre',
		// 	foreignKey: 'genre_id'
		// });
		// movie.belongsToMany(models.actors, {
		// 	as: 'actors',
		// 	through: 'actor_movie',
		// 	foreignKey: 'movie_id',
		// 	otherKey: 'actor_id'
		// });
	};

	return movie;
};