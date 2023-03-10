const express = require('express')
const app = express()
const PORT = 8000

const frogs = {
    'american bullfrog ': {
        'orgin': 'template',
        'color': 'template',
        'fact': 'template'
    },
    'northern leopard frog': {
        'orgin': 'template',
        'color': 'template',
        'fact': 'template'
    },
    'unknown':{
        'origin': 'unknown',
        'color': 'unknown',
        'fact': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html') //__dirname tells the server to start looking at the root for the index.html file.
})

app.get('/api/:frog',(request, response)=>{
    const frogName = request.params.frog.toLowerCase() //grab the query parameter. 
    
    if( frogs[frogName] ){
        response.json(frogs[frogName]) //here im using bracket notation because my frog names have spaces in them.
    }else{
        response.json(frogs['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it! :)`) //once the server is running this message should console log!
})