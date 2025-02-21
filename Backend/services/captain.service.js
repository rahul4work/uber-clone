const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    try {
        if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
            throw new Error('All fields are required');
        }
    
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            throw new Error('Captain already exists');
        }
    
        // Await the creation to return the created document
        const captain = await captainModel.create({
            fullname: { firstname, lastname },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        return captain;
    } catch (error) {
        console.error('Error in createCaptain:', error.message);
        throw error;
    }
};
