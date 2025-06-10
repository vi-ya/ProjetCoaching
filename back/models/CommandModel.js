import mongoose from "mongoose";

let commandSchema = mongoose.Schema({
    // userId: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: Date,
    articles: [{
        ref: String,
        title: String,
        subjects: String,
        locations: String,
        choice: String,
        price: Number
    }],
    total_price: Number
}, {
    timestamps: true
})

let Command = mongoose.model("Command", commandSchema)

export default Command;
