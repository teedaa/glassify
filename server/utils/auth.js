const jwt = require('jsonwebtoken');

const expiration = '1h';

module.exports = {
    signToken: function ({ username, _id }) {
        const payload = { username, _id };
        return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration });
    }
}