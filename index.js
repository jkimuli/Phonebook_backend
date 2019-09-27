require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const Phone = require('./models/phone')

// register middleware
app.use(express.static(path.join(__dirname,'build')))
app.use(bodyParser.json())
app.use(cors())
morgan.token('body', (req,res)=> {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info', (req,res,next) => {
    Phone.find().estimatedDocumentCount().then(
        count => res.send(`<p>Phonebook has info for ${count} people</p>
        <p>${new Date()} </p>`)
        )
        .catch(err => next(err))    
    
})

// return all persons in the phonebook
app.get('/api/persons', (req,res)=>{
   Phone.find({})
        .then(phones => res.json(phones))
        .catch(err => res.status(400).json(`Error: ${err}`))
   
})

//return a specific phonebook contact
app.get('/api/persons/:id', (req,res,next) => {
    Phone.findById(req.params.id)
         .then(phone => {
             if(phone){
                res.json(phone.toJSON())
             }else{
                res.status(404).end()
             }
         })   
         .catch(err => next(err))
})

// Delete a phonebook contact

app.delete('/api/persons/:id', (request, response,next) => {    
    Phone.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))

})

// adding a new phonebook entry

app.post('/api/persons', (req,res,next) => {
    // check for empty name or number
    const body = req.body   

    if(!body.name || !body.number){
        return res.status(404).json({
            'error': 'Missing number or phone number'
      })
    
    }else{
        const phone = new Phone({
            name:body.name,
            number:body.number
        })

        phone.save()
             .then((savedPhone)=> res.json(savedPhone.toJSON()))
             .catch(err => next(err))
    }    
})

// update phone number for a specific contact

app.put('/api/persons/:id', (request, response,next) => { 
    const phone = {
        name:request.body.name,
        number:request.body.number
    }   
    Phone.findByIdAndUpdate(request.params.id,phone,{new:true})
        .then(updatedPhone => {
        response.json(updatedPhone.toJSON())
      })
      .catch(error => next(error))
         
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

// Error Handling middleware
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name ==='ValidationError'){
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
