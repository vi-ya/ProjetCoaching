import Command from '../models/CommandModel.js';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Add a new order
 */

export const AddCommand = async (req, res) => {

    try {

        let price = 0;
        for (const p of req.body.articles) {
            price += p.price
        }
        let newCommand = new Command({
            // userId: req.body.user,
            userId: req.userId,
            articles: req.body.articles,
            date: new Date(),
            total_price: price
        })
        await newCommand.save()

        res.json({ message: "Commande bien enregistrée" })

    } catch (error) {
        res.json({ message: "Commande indisponible" })
    }
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Retrieve all user orders to do 
 */
export const GetCommands = async (req, res) => {
    try {
        const commands = await Command.find({}).sort({ createdAt: -1 })

        res.json(commands)

    } catch (error) {
        res.json({ message: "Commande introuvable" })
    }
}

/**
* 
* @param {*} req 
* @param {*} res 
* Get a user's order
*/
export const GetCommandsUser = async (req, res) => {

    try {
        console.log(req.userId)
        let commands = await Command.find({ userId: req.userId })
        

        res.json(commands)
        console.log(req.userId);

    } catch (error) {
        res.json({ message: "compte introuvable/Commande non identifié" })
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Get order details to do
 */
export const GetOneCommand = async (req, res) => {

    try {
        const { id } = req.params
        const command = await Command.find({ _id: id })

        res.json(command)

    } catch (error) {
        res.json({ message: "Aucune commande avec cet ID" })

    }
}
