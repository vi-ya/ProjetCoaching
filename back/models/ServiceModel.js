import mongoose from "mongoose"

let serviceSchema = mongoose.Schema({
    title: String,
    image: [{
        src: String,
        alt: String
    }]
}, {
    timestamps: true
})

let Service = mongoose.model("Service", serviceSchema)

export default Service; 