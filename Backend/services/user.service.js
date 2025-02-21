const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    try {
        if (!firstname || !email || !password) {
            throw new Error('All fields are required');
        }
        // Await the creation so that you return the created document
        const user = await userModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password
        });

        return user;
    } catch (error) {
        console.error('Error in createUser:', error.message);
        throw error;
    }
};
