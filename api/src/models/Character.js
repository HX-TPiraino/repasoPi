const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://th.bing.com/th/id/R.21eff29d7ea42c6946639d417594b91b?rik=xuC0z5fEIzkRMA&pid=ImgRaw&r=0"
    },
    origin: {
      type: DataTypes.STRING
    },
    species: {
      type: DataTypes.STRING
    },
    createInDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
