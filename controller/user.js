const sql = require('mssql/msnodesqlv8');
const { connection } = require('../sql');

connection();

const db = new sql.Request();

function uploadFileName(req, res) {
    try {
        if(!req.body.userName || !req.file.filename) return res.json({success : false, msg : 'invelid credentials'})
        else {
            console.log('file log:', req.body.userName, req.file.filename);
            const query = `insert into users (userName, profileImg) values ('${req.body.userName}', '${req.file.filename}')`
            db.query(query, (error, result)=>{
                if(error){
                    console.log('insert error :', error);
                    return res.json({success : false, msg : 'error in insert'})
                }else{
                    console.log('insert result :', result);
                    res.json({ success: true, msg: 'data inserted'});
                }
            })
        }
    } catch (error) {
        console.log('add file error', error);
        res.json({ success: false, msg: 'api not working' });
    }
}

module.exports = {
    uploadFileName
}
