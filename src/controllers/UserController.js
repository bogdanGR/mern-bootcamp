const User = require('../models/User');
const bcrypty = require('bcrypt');

module.exports = {
    async store(req, res) {
        try {
            const { email, firstName, lastName, password } = req.body;
            const  existenUser = await User.findOne({email});

            if (!existenUser) {
                const hashedPassord = await  bcrypty.hash(password, 10);
                const user = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassord

                });
                return  res.json(user);
            }

            return  res.status(400).json({
                message: 'user already exists! Do you want to login instead?'
            });
        } catch (err) {
            throw Error(`Error while Registering new user :  ${err}`)
        }
    }
}
