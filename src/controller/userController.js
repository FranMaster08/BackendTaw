const { userModel } = require("../model");

const userController = {
  getUsers: async (req, res, next) => {
    try {
      const result = await userModel.getUsers();
      res.render("users/users", { usuarios: result });
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { name, last_name, address, birthday, password, email, telefono } =
        req.body;
      const result = await userModel.createUser({
        nombre: name,
        apellido: last_name,
        direccion: address,
        fechaNacimiento: birthday,
        password: password,
        mail: email.toLowerCase(),
        Provincias_id: 1,
        telefono,
        Rol_id: 2,
      });
      res.status(200).redirect("/sign");
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const result = await userModel.updateUser(req.body, id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const result = await userModel.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  findUser: async (req, res, next) => {
    try {
      const result = await userModel.findUser();
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { user, pass } = req.body;
      console.log(userModel);
      const usr = await userModel.getUser(user.toLowerCase(), pass);

      if (usr == null || usr.length == 0) {
        return res.redirect("/sign");
      }
      if (usr[0].Rol_id == 2) {
        return res.redirect("/dashboard");
      }
      if (usr[0].Rol_id == 1) {
        
        return res.redirect("/users");
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
