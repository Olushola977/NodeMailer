var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});


var mailOptions = {
  from: 'Nodemailer example@nodemailer.com',
  to: 'smittenlizzy977@gmail.com',
  subject: 'HÁLlOØWEeŃ Messages',
  text: `fuck it niggaz!!!,
            A Fvcin' breakthrough niggaz.
            Check the fvckkin' tym in tha fvckin' zone
            it's changed, right? Yeah... It waits for no one,
            Not even you...`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});