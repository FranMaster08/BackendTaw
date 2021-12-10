const db = require("../database/models");

module.exports = {
  getUsers: async () => {
    try {
      const response = await db.User.findAll();
      return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
  getUser: async (mail,pass) => {
    try {
      const response = await db.User.findAll({
        where : {
          mail:mail,
          password:pass,
        }
      });
      return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
  deleteUser: async (idUser) => {
    try {
      const response = await db.User.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log(
        `fallo eliminar usuario en la base de datos ${error.message}`
      );
      return [];
    }
  },
  createUser: async (User) => {
    try {
      const response = await db.User.create({
        ...User,
      });
      return response;
    } catch (error) {
      console.log(`fallo crear usuario en la base de datos ${error.message}`);
      return [];
    }
  },
};
