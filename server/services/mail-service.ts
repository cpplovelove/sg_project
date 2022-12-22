import nodemailer from 'nodemailer';
import mailConfig from '../config/mail-config.json'assert { type: "json" };


const MailService = {
    async sendMail(toEmail: String, authNumber: Number) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            prot: 587,
            host: 'smtp.gmlail.com',
            secure: false,
            requireTLS: true,
            auth: {
                user: mailConfig.user,
                pass: mailConfig.pass
            }
        });

        var mailOptions = {
            from: mailConfig.user,
            to: toEmail,
            subject: "[소원을 말해봐] 인증 이메일 입니다",
            text: authNumber + "인증하셈"
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }
}


export default MailService;

