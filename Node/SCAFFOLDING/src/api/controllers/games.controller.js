const Game = require("../models/game.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const setError = require("../../helpers/handleError");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");
dotenv.config();


//!---------------------------------------
//?-----------GAME  BY TITLE------------
//!---------------------------------------


const title = async(req, res, next)=>{

    const {title} = req.params

    try {
        const game = await Game.find({title:title})
        if(game){
            return res.status(200).json(game)
        }
    } catch (error) {
        return res.status(404).json("Game not found")
        
    }

}

//!---------------------------------------
//?-----------GAME  BY ID------------
//!---------------------------------------

const gameByID = async(req, res, next)=>{
    const {id} = req.params

    try {
        const gameID = await Game.findById(id)

        if(gameID){
           return res.status(200).json(gameID)
        }
    } catch (error) {
        res.status(500).json(error)
        
    }

}



module.exports ={title, gameByID}