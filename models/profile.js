import mongoose from 'mongoose'

const Schema = mongoose.Schema

const detailSchema = new Schema ({
  age: Number,
  happy: String,
  spiritAnimal: String
}, {
  timestamps: true
})


const profileSchema = new Schema({
  name: String,
  avatar: String,
  details: [detailSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
