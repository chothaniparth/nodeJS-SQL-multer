const sql = require('mssql/msnodesqlv8');

const config = {
    server : 'FLUTTER3\\SQLEXPRESS',
    database : 'multer',
    driver : 'msnodesqlv8',
    options : {
        trustedConnection : true
    }
}

async function connection (){
    try{
        await sql.connect(config);
        console.log('db connected');
    }catch(error){
        console.error('DB connection error :', error);
    }
}

module.exports = {connection}