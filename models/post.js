import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const postSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  comments: [commentSchema],
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}