import bcrypt from 'bcrypt'
import User from '../models/UserModel.js'
import jwt from "jsonwebtoken"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Connection system 
 */
export const Login = async (req, res) => {

    try {
        
        const user = await User.findOne({ "email": req.body.email })
        
        if (!user) {
            return res.json({ message: "Aucun compte trouvé" });
        }     
        
        const checkPassword = bcrypt.compareSync(req.body.password, user.password) 
        
        if (!checkPassword) {
            console.log("Mot de passe incorrect.");
            return res.json({ message: "Mot de passe incorrect, veuillez le saisir à nouveau" })
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        })
        console.log("Connexion réussie. Token généré.");  
        
        return res.json({
            message: `Bienvenue ${user.login} !`,
            user: {
                id: user._id,
                login: user.login,
                email: user.email,
                role: user.role
                
            },
            token: token
        });
        // res.json({
        //     id: user._id,
        //     login: user.login,
        //     email: user.email,
        //     role: user.role,
        //     token: token
        // }) 
        // res.json({ message: "Connexion réussie" })
    }catch(error){
        console.error("Erreur serveur :", error);
        res.status(500).json({ message: "Erreur serveur." });
        res.json({ message: "Aucun compte trouvé" })

    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Disconnect system 
 */
// export const Logout = (req, res) => {

//     req.user.id.destroy((err) => {
//         res.redirect("/")
//     })
// }

export const Logout = (req, res) => {
    res.json({ message: "Déconnecté" });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Subscription system 
 */
export const Register = async (req, res) => {

    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
    
    

    // Vérification des doublons
    let checkLoginExist = await User.findOne({ login: req.body.login})

    if (checkLoginExist) {
        return res.json({ message: "Cet login existe déjà " })
    }

    let checkMailExist = await User.findOne({ email: req.body.email })

    if (checkMailExist) {
        return res.json({ message: "Cet email existe déjà " })
    }

    if (!checkPassword.test(req.body.password)) {
        return res.json({ message: "Le mot de passe ne respecte pas les conditions" })
    }

    let newUser = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    })

    await newUser.save()

    res.json({ message: "Utilisateur bien enregistré " })
}

export const GetAllUsers = async (req, res) => {

    const users = await User.find({})

    if (!users) {

        return res.json({ message: "aucun utilisateur trouvé" })
    }

    res.json(users)



}