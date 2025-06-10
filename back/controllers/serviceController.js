import Service from "../models/ServiceModel.js";

/**
 * 
 * @param {*} req 
 * @param {*} res
 * Services offered   
 */

export const GetServices = async (req, res) => {

    try {
        const services = await Service.find({})
        res.json(services)

    } catch (error) {
        res.json({ message: "Service indisponible" })
    }
}
