var DataTypes = require("sequelize").DataTypes;
var _Provincias = require("./Provincias");
var _Rol = require("./Rol");
var _User = require("./User");

function initModels(sequelize) {
  var Provincias = _Provincias(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  User.belongsTo(Provincias, { as: "Provincia", foreignKey: "Provincias_id"});
  Provincias.hasMany(User, { as: "Users", foreignKey: "Provincias_id"});
  User.belongsTo(Rol, { as: "Rol", foreignKey: "Rol_id"});
  Rol.hasMany(User, { as: "Users", foreignKey: "Rol_id"});

  return {
    Provincias,
    Rol,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
