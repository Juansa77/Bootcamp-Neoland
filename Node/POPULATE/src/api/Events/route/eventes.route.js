const express = require("express");
const Events = require("../model/events.model");
const Calendar = require("../../Calendar/model/calendar.model");

const router = express.Router();

//RUTA EN MÉTODO POST
router.post("/:idCalendar", async (req, res, next) => {
  try {
    //CREAMOS UN NUEVO EVENTO QUE RECIBIMOS DESDE EL BODY
    const newEvents = new Events(req.body);
    //LO SALVAMOS
    const postNewEvent = await newEvents.save();
    if (postNewEvent) {
      //RECIBIMOS LA ID DESDE EL REQ.BODY EN EL EVENTS, Y VEMOS SI EXISTE EN CALENDAR
      const calendar = await Calendar.findById(req.params.idCalendar);
      let updateCalendar;

      try {
        //METEMOS EN EL EVENTO DE CALENDAR EL NUEVO EVENTO POR ID
        calendar.events.push(newEvents._id);

        // CON EL MÉTODO REQ.PARAMS, SOLO CON LA ID TENEMOS ACCESIBLES TODOS LOS PARÁMETROS DEL EVENTO PARA METER EN CALENDAR

        updateCalendar = await Calendar.findByIdAndUpdate(
          req.params.idCalendar,
          calendar
        );
      } catch (error) {
        next(error);
      }
      //USAMOS POPULATE, QUE NOS DA UNA PATH PARA PARA REMPLAZAR DOCUMENTOS ENTRE DIFERENTES MODELS
      return res.status(200).json({
        createEvent: postNewEvent,
        updateCalendar: await Calendar.findById(req.params.idCalendar).populate(
          "events"
        ),
      });
    }
  } catch (error) {
    return next(error);
  }
});

//-----------------GET ALL--------------------

router.get("/", async (req, res, next) => {
  try {
    const eventsAll = await Events.find().populate("day");
    if (eventsAll) {
      return res.status(200).json(eventsAll);
    } else {
      res.status(404).json("Not found");
    }
  } catch (error) {
    return next(error);
  }
});

//------GET BY NAME

router.get("/name/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const eventByName = await Events.find({ name }).populate(name);

    if (eventByName) {
      res.status(200).json(eventByName);
    } else {
      res.status(404).json("Not found");
    }
  } catch (error) {
    return next(error);
  }
});

//-----BY ID

router.get("/id/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const eventByID = await Events.findById(id).populate("day");
    if (eventByID) {
      res.status(200).json(eventByID);
    } else res.status(404).json("Not found");
  } catch (error) {
    next(error);
  }
});

///----------PATCH

router.patch("/:id", async (req, res, next) => {
  try {
    await Events.syncIndexes();
    const { id } = req.params;
    const updateEvent = await Events.findByIdAndUpdate(id, req.body).populate(
      "day"
    );
    if (updateEvent) {
      return res.status(200).json(updateEvent);
    } else {
      return res.status(404).json("Todo mal con el patch");
    }
  } catch (error) {
    next(error);
  }
});

//-----------DELETE

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    //Encontramos el evento por index y lo borramos
    const deleteEvent = await Events.findByIdAndDelete(id);
    if (deleteEvent) {
      //COn Update Many sacamos del modelo Calendar todas las ID de Index que queremos borrar
      await Calendar.updateMany({ events: id }, { $pull: { events: id } });
      //Para mejorar el feedback del usuario, en la respuesta exitosa devolvemos el objeto borrado para confirmar
      return res.status(200).json({
        finally: "Erase successfully",
        deleteEvent: deleteEvent,
        test:
          (await Events.findById(id)) === null
            ? "Borrado correcto"
            : "Error borrando",
      });
    } else {
      res.status(404).json("Error at first step");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
