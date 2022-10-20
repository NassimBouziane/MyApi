express = require('express')
const routerCategories = express()

routerCategories.get('/', (req, res) => {
    res.send("je suis categories")
  })

routerCategories.get('/:id', (req, res) => {
    res.send("je suis id")
  })
  
routerCategories.post('/', (req, res) => {
    res.send("je suis le post")
  })

routerCategories.patch('/:id', (req, res) => {
    res.send("je suis le patch")
  })

routerCategories.delete('/:id', (req, res) => {
    res.send("je suis delete")
  })
  
module.exports = routerCategories;