const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "mail_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Provincias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Provincias',
        key: 'id'
      }
    },
    Rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rol',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
      {
        name: "fkUserProvinciasidx",
        using: "BTREE",
        fields: [
          { name: "Provincias_id" },
        ]
      },
      {
        name: "fk_User_Rol1_idx",
        using: "BTREE",
        fields: [
          { name: "Rol_id" },
        ]
      },
    ]
  });
};
