import Coaching from "../models/CoachingModel.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Function to obtain the coachings
 */
export const Admin = async (req, res) => {

    try {

        const coachings = await Coaching.find({})
        res.json(coachings)

    } catch (err) {
        res.json({ message: "coaching introuvable" })
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Function for recovering coaching options
 */
export const GetFields = async (req, res) => {

    try {

        const mode = await Coaching.find({}).distinct("modes.mode");
        const subject = await Coaching.find({}).distinct("subjects.subject");
        const location = await Coaching.find({}).distinct("locations.location");
        const people = await Coaching.find({}).distinct("peoples.people");
        const choice = await Coaching.find({}).distinct("choice.option");

        res.json({ mode, subject, location, people, choice })

    } catch (err) {
        res.json({ message: "option introuvable" })
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Function to add a coaching
 */
export const AddCoaching = async (req, res) => {

    try {

        let checkCoaching = await Coaching.findOne({ title: req.body.title })

        if (checkCoaching) {
            return res.json({ message: "coaching déjà existant" })
        }
        const coachings = await Coaching.find({})
        // méthode pour ajouter +1
        let id = coachings[coachings.length - 1].ref + 1;

        console.log(req.body)

        let newCoaching = new Coaching({
            ref: id,
            title: req.body.title,
            description: req.body.description,
            target: req.body.target,
            content: req.body.content,
            benefit: req.body.benefit,
            program: req.body.program,
            // modes: [{ mode: req.body.mode }],
            // subjects: [{ subject: req.body.subject }],
            // locations: [{ location: req.body.location }],
            // peoples: [{ people: req.body.people }],
            // choice: [{
            //     option: req.body.option,
            //     price: req.body.price,
            modes: Array.isArray(req.body.mode) ? req.body.mode.map(mode => ({ mode })) : [],
            subjects: Array.isArray(req.body.subject) ? req.body.subject.map(subject => ({ subject })) : [],
            locations: Array.isArray(req.body.location) ? req.body.location.map(location => ({ location })) : [],
            peoples: Array.isArray(req.body.people) ? req.body.people.map(people => ({ people })) : [],
            
            // choice: Array.isArray(req.body.option) 
            choice: Array.isArray(req.body.option) && Array.isArray(req.body.price)
                ? req.body.option.map((opt, i) => ({
                    option: opt,
                    // price: Array.isArray(req.body.price) ? Number(req.body.price[i]) : Number(req.body.price)
                    price: Number(req.body.price[i] || 0 )
                }))
                : [],
})

        console.log(newCoaching)
        await newCoaching.save()

        res.json({ message: "Coaching crée" })

    } catch (err) {
        res.json({ message: "Impossible de créer le coaching" })
    }
};



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Function to delete a coaching
 */
export const DeleteCoaching = async (req, res) => {

    try {

        const id = req.params.id

        let deleteCoaching = await Coaching.deleteOne({ _id: id })

        // Gestion des erreurs
        if (!deleteCoaching) {

            return res.json({ message: "coaching introuvable" });
        }

        res.json({ message: "suppression effectué" });

    } catch (err) {
        res.json({ message: "supression impossible" });
    }

}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * Function for editing coaching, to do
 */
export const EditCoaching = async (req, res) => {

    try {


        let editCoaching = await Coaching.findOne({ _id: req.body.id })

        // Gestion des erreurs
        if (!editCoaching) {

            return res.json({ message: "coaching introuvable" });
        }

        const coachings = await Coaching.find({})
        let id = coachings[coachings.length - 1].ref + 1;

        editCoaching = {
            ref: (id),
            title: req.body.title,
            description: req.body.description,
            target: req.body.target,
            content: req.body.content,
            benefit: req.body.benefit,
            program: req.body.program,
            modes: [{ mode: req.body.mode }],
            subjects: [{ subject: req.body.subject }],
            locations: [{ location: req.body.location }],
            peoples: [{ people: req.body.people }],
            choice: [{
                option: req.body.option,
                price: req.body.price,
            }],

        }

        await Coaching.updateOne({ _id: id }, editCoaching)

        res.json({ message: "modification effectué" });

    } catch (err) {
        res.send({ message: "modification impossible" });
    }

}