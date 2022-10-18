import { DataTypes } from "sequelize";
import { Sequelize,sequelize } from "./config";

export const product = sequelize.define('Product',{

productid:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
productName :{
    type: DataTypes.STRING,
    allowNull: false,
},
productPrice:{
    type: DataTypes.STRING,
    allowNull : false,
},

});
console.log(product === sequelize.models.Product);
