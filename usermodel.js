const db = require('../config/db');

//async-wait
const getallbooks = async () =>{
    const [rows] = await db.query('SELECT * FROM buku')
    return rows
}

const getbookbycode = async (code) =>{
    const [rows] =
    await db.query('SELECT * FROM buku WHERE kode_buku = ?', [code])
    return rows[0]
}

module.exports ={getallbooks,getbookbycode}
