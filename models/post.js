import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}