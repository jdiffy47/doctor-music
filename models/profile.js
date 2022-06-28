import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileExerciseSchema = new Schema({
  name: String,
  description: String,
  current: String,
  goal: String
})


const profileSchema = new Schema({
  name: String,
  avatar: String,
  profileExercise: [profileExerciseSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
