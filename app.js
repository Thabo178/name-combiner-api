const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

app.get("/api/combine", (req,res)=> {

    let result = {
        name1:'',
        name2:'',
        results: []
    }

    // extract the query string params
    result.name1 = req.query.name1 || ''
    result.name2 = req.query.name2 || ''

    // compute combinations 


    // create an array of results
    result.results.push({id: 1, name:"Johnob", goodness:3.4})


    // write the results to a file
    const filePath = path.join(__dirname, '/logs/output.log')
    fs.appendFile(filePath, `${Date.now()} | ${JSON.stringify(result)}`, (err)=>{
        console.log(err)

    })

    // send back the response with the data 
    res.json(result)
})

app.listen(PORT, ()=> {
    console.log(`server started on http://localhost:${PORT}`)
})