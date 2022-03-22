const express = require("express");
const voitureRouter = express.Router();
const Voiture = require ("../models/voiture")


voitureRouter.post("/add", async (req, res) => {
  try {
    const newVOiture = new Voiture(req.body);
    let result = await newVOiture.save();
    res.send( result );
  } catch (error) {
    console.log(error);
  }
});

voitureRouter.get("/get", async (req, res) => {
    try {
      let result = await Voiture.find();
      res.send( result );
    } catch (error) {
      console.log(error);
    }
  });
  voitureRouter.delete("/delete/:id", async (req, res) => {
    try {
        
      let result = await Voiture.findByIdAndRemove({ _id: req.params.id });
  
      res.send( "voiture removed");
    } catch (error) {
      console.log(error);
    }
  });
  voitureRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Voiture.findByIdAndUpdate(req.params.id,req.body );
  
      res.send("voiture updated" );
    } catch (error) {
      console.log(error);
    }
  });
  



module.exports = voitureRouter;