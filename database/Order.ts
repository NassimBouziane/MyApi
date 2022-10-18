import { product } from "./Product";
import { Users } from "./User";
import { DataTypes } from "sequelize";
import { Sequelize,sequelize } from "./config";


const Orders = sequelize.define('Order',{

    orderid:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ordername :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderdate:{
        type: DataTypes.STRING,
        allowNull : false,
    },
    orderquantity:{
        type: DataTypes.STRING,
        allowNull : false,
    },
    
    });
    Orders.hasMany(product,{
        through: ''
    })
    product.belongto(Orders);
