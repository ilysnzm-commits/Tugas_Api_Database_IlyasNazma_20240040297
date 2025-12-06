const usermodel = require('../models/usermodel')

const getallbooks = async (req, res) => {
    try {
        const books = await usermodel.getallbooks()
        res.json(books)
    }
    catch (error) {
        res.status(500).json(
            { 
                message: error.message,
                status : 500
            }
        );
    }
}

const getbookbycode = async (req, res) => {
    try {
        const book = await usermodel.getbookbycode(req.params.code)
        if(!book){
            return res.status(404).json(
                {
                    message: "Book not found",
                    status : 404
                }
            )
        }
        res.json(book)
    }
    catch (error) {
        res.status(500).json(
            { 
                message: error.message,
                status : 500
            }
        )
    }
}
module.exports = { getallbooks, getbookbycode }
