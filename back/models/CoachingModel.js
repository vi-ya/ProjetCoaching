import mongoose from "mongoose"

let coachingSchema = mongoose.Schema({
  ref: Number,
  title: String,
  description: String,
  target: String,
  content: String,
  benefit: String,
  program: String,
  modes: [
    { mode: String }
  ],
  subjects: [
    { subject: String }
  ],
  locations: [
    { location: String }
  ],
  peoples: [
    { people: String }
  ],
  choice: [
    {
      option: String,
      price: Number
    }
  ],
  order_count: Number
}, {
  timestamps: true
})

let Coaching = mongoose.model("Coaching", coachingSchema)

export default Coaching
