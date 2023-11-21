const Sequelize=require('sequelize');
 
const sequelize= new Sequelize('chatdatabase','test','newpassword',{
    dialect:'mysql',
    host: 'localhost',
})

module.exports=sequelize;
