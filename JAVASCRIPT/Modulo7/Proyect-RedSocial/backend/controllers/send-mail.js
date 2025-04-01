const transporter = require('../config/mail')

const sendMail = async (to, subject, text) => {
    const mailOption = {
        from : 'saulymarclash12@gmail.com',
        to: to,
        subject: subject,
        html: text
    }
    try{
        await transporter.sendMail(mailOption);
        // res.status(200).send('Correo enviado')
     }catch (error){
        console.log(error)
        // res.status(500).send('Correo no enviado')
     }
}

module.exports = sendMail
