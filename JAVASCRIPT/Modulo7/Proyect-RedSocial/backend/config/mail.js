const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'saulymarclash12@gmail.com',
        pass:'MandyORG06/23'
    }
})

transporter.verify()

module.exports = transporter