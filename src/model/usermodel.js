const { User, Provincias } = require("../database/models");

module.exports = {
  getUsers: async () => {
    const users = await User.findAll({
      include: {
        model: Provincias,
        attributes: ["nombre"],
        as: "Provincia",
      },
    });
    return users;
  },
  createUser: async (user) => {
    const result = await User.create(user);
    return true;
  },
  updateUser: async (user) => {
    return null;
  },
  deleteUser: async (user) => {
    return null;
  },
  findUser: async (user, password) => {
    const users = await User.findOne ({
      where: {
        mail: user,
        password: password,
      },
    });
    return users ;
  },
};
