var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		const results = await knex('produtos_categorias');
		return res.render('produtos/produtos.html', { produtos: results });
	},
	async store(req, res, next) {
		try {
			await knex('produtos_categorias')
				.insert(req.body);
		} catch (error) {
			next(error);
		}
		return res.redirect('/produtos/cadastro#categoria');
	}
	// async update(req, res, next) {
	// 	try {
	// 		await knex('produtos')
	// 			.where('id', '=', req.params.id)
	// 			.update(req.doby);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// 	return res.redirect('/produtos');
	// },
	// async delete(req, res, next) {
	// 	try {
	// 		await knex('produtos')
	// 			.where('id', '=', req.params.id)
	// 			.del();
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// 	return res.redirect('/produtos');
	// },
	// async cadastro(req, res) {
	// 	return res.render('produtos/produtos-cadastro.html');
	// },
	// async controleSerial(req, res) {
	// 	return res.render('produtos/controle-serial.html');
	// }
}