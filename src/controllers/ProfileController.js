const connection = require("../database");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    if (!ong_id) {
      return response.status(401).json({
        statusCode: "401",
        error: "Unauthorized",
        message: "Ong não está autenticada"
      });
    }

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  }
};
