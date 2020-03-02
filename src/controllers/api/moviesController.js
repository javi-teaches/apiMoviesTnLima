const db = require('../../database/models');
const movies = db.movies;

module.exports = {
	index: (req, res) => {
		movies
			.findAll()
			.then(result => {
				return res.json(result);
			}).catch(error => res.json(error));
	},
	show: (req, res) => {
		movies
			.findByPk(req.params.id)
			.then(result => {
				if(result) {
					return res.json(result);
				}
				return res.status(404).json({
					status: res.statusCode,
					method: req.method
				});
			}).catch(error => res.json(error));
	},
	store: (req, res) => {
		if (req.body.token != '123') {
			return res.status(505).json({
				msg: 'no fue posible guardar'
			});
		} else {
			movies
				.create(req.body)
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
	},
	destroy: (req, res) => {
		if (req.body.token != '123') {
			return res.status(505).json({
				msg: 'no fue posible borrar'
			});
		} else {
			movies
				.destroy({
					where: { id: req.params.id }
				})
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
		
	}
}