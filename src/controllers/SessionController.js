const connection = require("../database");

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Nenhuma ONG encontrada com esse ID'
      });
    }

    return response.json(ong);
  }
};
