const express = require("express");
const Calendar = require("../model/calendar.model");

const router = express.Router();





//-------------RUTA POST con REDIRECCIÓN, NOS LLEVAMOS DATOS DEL POST POR QUERY

router.post("/", async (req, res, next) => {

  try {
    console.log("Peticion de calendar recibida");
   
    const newCalendarDay = new Calendar(req.body);
    const postCalendarDay = await newCalendarDay.save();

    // Guardamos los datos del POST que nos interesan
    
    const calendarDate= postCalendarDay.date
    const calendarDescription = postCalendarDay.description
  
    return postCalendarDay
    //EN LA REDIRECCIÓN, METEMOS POR URL LOS DATOS QUE NOS INTERESA GUARDAR COMO QUERYS Y ASÍ PODEMOS RESCATARLOS LUEGO
      ? res.redirect(`http://localhost:8095/api/v1/calendar/gracias?date=${calendarDate}&description=${calendarDescription}`)
      : res.status(404).json("Error create Calendar");
  } catch (error) {
    return next(error);
  }
});

//...RUTA DE AGRADECIMIENTO AL INTRODUCIR CALENDAR, NOS TRAEMOS LOS DATOS DE LA QUERY DEL POST 

router.get("/gracias", async(req, res, next)=>{


  try {
    const date= req.query.date
    const description = req.query.description
    console.log(date)
    return res.status(200).json({mensaje: "¡¡Te acabo de redirigir!!, Calendario creado", fecha: date, description: description})
    
  } catch (error) {

    next(error)
    
  }
})




//------------RUTA GETALL


router.get("/", async (req, res, next) => {
  try {
    const allCalendars = await Calendar.find();

    if (allCalendars) {
      return res.status(200).json(allCalendars);
    } else {
      return res.status(404).json("Calendars not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
