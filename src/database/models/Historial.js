const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Historial', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechaUltimoIngreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Historial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "User_id" },
        ]
      },
      {
        name: "fk_Historial_User1_idx",
        using: "BTREE",
        fields: [
          { name: "User_id" },
        ]
      },
    ]
  });
};
