import { Post } from '../models/post.js'



function index(req, res) {
  Post.find({})
  .then(posts => {
    res.render('posts/index', {
      posts,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
    .catch(err => {
      console.log(err)
      res.redirect('/posts')
    })
}

function show(req, res) {
  Post.findById(req.params.id)
  .populate('owner')
  .then(post => {
    res.render('posts/show', {
      post
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function edit(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    res.render('posts/edit', {
      post
    })
  })
}

function update(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    if (post.owner.equals(req.user.profile._id)) {
    post.updateOne(req.body, {new: true})
    .then(updatedPost => {
      res.redirect(`/posts/${post._id}`)
    })
  } else {
    throw new Error ('NOT ALLOWED BRO')
  }
  })
}

function deletePost(req, res) {
  Post.findById(req.params.id)
    .then(post => {
      if (post.owner.equals(req.user.profile._id)) {
        post.delete()
          .then(() => {
            res.redirect('/posts')
          })
      } else {
        throw new Error('Not today brotha')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/posts')
    })
}


function createComment(req, res) {
  Post.findById(req.params.id)
    .then(post => {
      post.comments.push(req.body)
      post.save()
        .then(() => {
          res.redirect(`/movies/${post._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

export { 
  index,
  create,
  show,
  edit,
  createComment,
  update,
  deletePost as delete
}