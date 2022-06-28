import { Exercise } from '../models/exercise.js'
import { isLoggedIn } from '../middleware/middleware.js'



function index(req, res) {
  Exercise.find({})
  .then(exercises => {
    res.render('exercises/index', {
      exercises,
    })
  })
  
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Exercise.create(req.body)
  .then(exercise => {
    res.redirect('/exercises')
  })
    .catch(err => {
      console.log(err)
      res.redirect('/exercises')
    })
}

function addToProfile(req, res){
  
}

export { 
  index,
  create,
  addToProfile as add
}