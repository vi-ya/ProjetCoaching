import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userSchema = mongoose.Schema({

    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    role: {
        type: String,
        default: "Utilisateur",
        required: true
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
})

// Password hashing
userSchema.pre("save", function (next) {

    if (!this.isModified("password")) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

let User = mongoose.model("User", userSchema)

export default User