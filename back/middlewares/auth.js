import jwt from "jsonwebtoken"
import User from "../models/UserModel.js";

export const isLogged = (req, res, next) => {

    // Header token extraction

    let authToken = req.headers.authorization;
    let token = authToken && authToken.split(" ")[1];

    console.log("token extrait: " + token);
    console.log("Authorization header:", authToken);

    if (!token) {
            console.log("JWT error:", err.message);
        return res.json({ message: "Vous n'êtes pas authentifié" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) {
            return res.json({ message: "Vous n'êtes pas autorisé à accéder à cette page" })
        }
        console.log("decoded:", decoded);
        req.userId = decoded.id
        

        next();

    })
}


export const isAdmin = async (req, res, next) => {

    const user = await User.findById(req.userId)

    if (!user) {
        return res.json({ message: "Aucun utilisateur trouvé" })
    }

    if (user.role !== "Admin") {
        return res.json({ message: "Vous devez être administrateur pour avoir accés " })
    }

    next();
    return;
}