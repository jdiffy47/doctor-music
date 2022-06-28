import { Exercise } from '../models/exercise.js'



function index(req, res) {
  Exercise.find({})
  .then(exercises => {
    res.render('exercises/index', {
      exercises,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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

function show(req, res) {
  Exercise.findById(req.params.id)
  .then(exercise => {
    res.render('exercises/show', {
      exercise
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises')
  })
}

export { 
  index,
  create,
  show
}