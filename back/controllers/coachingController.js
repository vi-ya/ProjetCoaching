import Coaching from "../models/CoachingModel.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Get all coachings
 */
export const GetCoachings = async (req, res) => {
    try {

        const coachings = await Coaching.find({}).sort({ ref: -1 })

        res.json(coachings)

    } catch (error) {
        res.json({ message: "Coachings indisponibles" })
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
  */
// Get a single coaching by your ID
export const GetOneCoaching = async (req, res) => {

    try {
        // Paramètre dynamique 
        const { id } = req.params

        let coaching = await Coaching.findById(id)

        res.json(coaching)

    } catch (error) {
        res.json({ message: "Coaching indisponible" })
    }
}