const Game = require("../models/game.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const setError = require("../../helpers/handleError");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");
const User = require("../models/user.model");
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


//!-------------------------------------------
//?-----------ADD GAME  TO USER------------
//!-------------------------------------------

const addGameToUser = async(req, res, next) =>{

    const {userId, gameId} = req.params 

    try {

        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        //Hacemos un includes para no meter juegos repetidos
        if (user.games.includes(gameId)) {
            return res.status(400).json({ message: "Game already added to user" });
          }

        else{
        
            await user.save()
            return res.status(200).json({message: "Game added to user"})
        }
    } catch (error) {
        console.log("Error adding game to user", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }

}

module.exports ={title, gameByID, addGameToUser}