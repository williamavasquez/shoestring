//NOT FINISHED

const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
                user: "helloshoestringapp@gmail.com",
                pass: "$hoestring22",
            },
        });

        await transporter.sendMail({
            from: "helloshoestringapp@gmail.com",
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};
module.exports = sendEmail;