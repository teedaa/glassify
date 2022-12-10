const jwt = require('jsonwebtoken');

const expiration = '1h';

module.exports = {
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration });
    }
}