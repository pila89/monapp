const mongoose = require("mongoose");

const schema = mongoose.Schema ;

const voitureSchema = new schema ({
  marque: { type: String, required: true },
  kilometrage: { type: Number, required: true },
  dateDeCirculation : { type: String, required: true },

})

module.exports=mongoose.model("voiture",voitureSchema)