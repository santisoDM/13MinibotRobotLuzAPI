const { Router } = require("express");
const prueba = require("../udpStuff/udpDePrueba");
const updHan = Router();
// const centralController = require("../Library/Network commands/centralController");
updHan.post("/communication", async (req, res) => {
  try {
    const { stringCommand } = req.body;
    const response = await prueba(stringCommand);
    if (!stringCommand || typeof stringCommand !== "string")
      return "I'm so sorry, for the moment we cannot succeed with the request.";

    response
      ? res.status(200).json({ message: response })
      : res.status(400).json({ message: `Something went wrong: ${response}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
.get("/", async(req, res)=>{
  try{
    res.status(200).json('TODO OK');
  }catch(err){
    res.status(400).json(err.message)
  }
})

module.exports = updHan;
