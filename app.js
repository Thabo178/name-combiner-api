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
    result.name1 = (req.query.name1 || 'John').trim()
    result.name2 = (req.query.name2 || 'Cena').trim()

    // compute combinations
    const name1 = result.name1
    const name2 = result.name2

    const combinations = [
        { name: name1.slice(0, Math.ceil(name1.length / 2)) + name2.slice(Math.floor(name2.length / 2)), goodness: Math.random() * 5 },
        { name: name2.slice(0, Math.ceil(name2.length / 2)) + name1.slice(Math.floor(name1.length / 2)), goodness: Math.random() * 5 },
        { name: name1 + name2.slice(-1), goodness: Math.random() * 5 },
        { name: name2 + name1.slice(-1), goodness: Math.random() * 5 }
    ]

    // create an array of results
    combinations.forEach((combo, index) => {
        result.results.push({ id: index + 1, name: combo.name, goodness: parseFloat(combo.goodness.toFixed(2)) })
    })


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