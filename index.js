const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let phones = [
   {
       "id": 1,
       "name": "Julius Kimuli",
       "number": "0791448850"
   },

   {
    "id": 2,
    "name": "Ahmed Bandese",
    "number": "0791448856"
   },

   {
    "id": 3,
    "name": "James Bwambale",
    "number": "0791448857"
   },
]

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(100000));
}

app.get('/info', (req,res) => {

    const returnText = `<p>Phonebook has info for ${phones.length} people</p>
                        <p>${new Date()} </p>`
    res.send(returnText)
})

// return all persons in the phonebook
app.get('/api/persons', (req,res)=>{
   res.json(phones)
})

//return a specific phonebook contact
app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const phone = phones.find( phone => phone.id === id)

    if(phone){
        res.json(phone)
    }else{
        res.status(404).end()
    }
})

// Delete a phonebook contact

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phones = phones.filter(phone => phone.id !== id)  
    response.status(204).end()

})

// adding a new phonebook entry

app.post('/api/persons', (req,res) => {
    // check for empty name or number
    const body = req.body
    const phone_names = phones.map(phone=>phone.name) // all names already in the phonebook

    if(!body.name || !body.number){
        return res.status(404).json({
            'error': 'Missing number or phone number'
        })
    }else if(phone_names.includes(body.name)){
       return res.status(404).json({
           'error': 'This name already exists in the phonebook'
       })
    }else{
        const phone_number = {
            "id": generateId(),
            "name": body.name,
            "number": body.number
        }

        // add to the phonebook array    
        phones = phones.concat(phone_number)
        res.json(phone_number)
    }    
})

const PORT = 3001
app.listen(PORT)
console.log(`Server Listening on port: ${PORT}`)