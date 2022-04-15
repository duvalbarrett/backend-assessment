const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
  "Disbelief destroys the magic.",
  "Small confidences mark the onset of a friendship.",
  "Society prepares the crime; the criminal commits it.",
  "Allow compassion to guide your decisions.",
  "Do not let ambitions overshadow small success.",
  "Do not make extra work for yourself.",
  "Do not underestimate yourself. Human beings have unlimited potentials."
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex]

  res.status(200).send(randomFortune)
})



app.get("/api/rememberance", (req,res) => {
  res.status(200).send(rememberance)
})


const names = []
const rememberance = []
let id = 1

app.post("/api/createRememberance", (req,res) => {
  let { name } = req.body

  let newName = {
    id,
    name: name
  }
  for(i = 0; i < names.length; i++) {
    if(names[i].name === newName.name){
      res.status(406).send("I think we may have met before")
      return
    }
  }
  names.push(newName)
  id++
  res.status(200).send(names)

})

app.put("/api/updateRememberance", (req,res) => {
  const {check,update} = req.body
  console.log(check)
  console.log(names)
  for(i = 0; i < names.length; i++) {
    if(check === names[i].name){
      for(x = 0; x < names.length; x++) {
        if(update === names[x].name){
          res.status(400).send("The name you've chosen already exists in our records")
          return
        }
      }
      names[i].name = update
      res.status(200).send(names)
    }
  }
})

app.delete("/api/deleteRememberance/:id", (req,res) => {
  const nameId = +req.params.id
  console.log(nameId)

  const deleteName = names.findIndex(nameObj => {
    return nameObj.id === nameId
  })
  console.log(deleteName)
  id--
  const removed = names.splice(deleteName, 1)
  rememberance.push(removed[0])
  res.status(200).send([removed[0], names])
})







app.listen(4000, () => console.log("Server running on 4000"));

