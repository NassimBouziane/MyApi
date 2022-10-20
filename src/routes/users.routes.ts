 express = require('express')
const routerUser = express()


routerUser.get('/', (req, res) => {
    res.send("je suis user")
  })
  
 routerUser.get('/:id', (req, res) => {
    res.send("je suis id")
  })
  
routerUser.post('/', (req, res) => {
    res.send("je suis le post")
  })

routerUser.patch('/:id', (req, res) => {
    res.send("je suis le patch")
  })

routerUser.delete('/:id', (req, res) => {
    res.send("je suis delete")
  })
  
module.exports = routerUser;