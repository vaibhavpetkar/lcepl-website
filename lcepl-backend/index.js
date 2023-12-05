const express = require('express');
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');
const app = express();
var cors = require('cors')

const PORT = 3000;
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(fileUpload());
app.use(cors(corsOptions))

const mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'it@lcepl.com',
    pass: 'cjrbjeisjvcxezjk'
  }
});

app.post('/apply', (req, res) => {
  try {
    let mailOptions = {
      from: 'it@lcepl.com',
      to: 'career@lcepl.com',
      subject: `Fwd: Application for : ${req.body.name}`,
      text: `Hi There, \n \n A job application for the available job openings has been received. \n \n ${req.body.position ? `Positions: ${req.body.position} \n \n` : ''} ${req.body.experience ? `Expericence: ${req.body.experience} \n \n` : ''} ${req.body.qualification ? `Qualification: ${req.body.qualification} \n \n` : ''} ${req.body.location ? `Location: ${req.body.location} \n \n` : ''} \n \n Thank You!`,
    };
    if (req.files && req.files.file) {
      mailOptions = {
        from: 'it@lcepl.com',
        to: 'career@lcepl.com',
        subject: `Fwd: Application By :  ${req.body.name}`,
        text: `Hi There, \n \n A job application for the available job openings has been received.Please find attached the resume for your reference. \n \n ${req.body.position ? `Positions: ${req.body.position} \n \n` : ''} ${req.body.experience ? `Expericence: ${req.body.experience} \n \n` : ''} ${req.body.qualification ? `Qualification: ${req.body.qualification} \n \n` : ''} ${req.body.location ? `Location: ${req.body.location} \n \n` : ''} \n \n Thank You!`,
        attachments: [{ 'filename': req.files.file.name, 'content': req.files.file.data }]
      };
    }
    mail.sendMail(mailOptions, function (error, info) {
      console.log({ info }, { error })
      if (error) {
        console.log(error);
        res.send({
          success: false,
          message: 'Failed to apply',
          error
        })
      } else {
        res.send({
          success: true,
          message: 'Applied Successfully'
        })
      }
    });
  } catch (error) {
    console.log('error is', error)
  }
});
app.post('/subcontractor', (req, res) => {
  try {
    let mailOptions = {
      from: 'it@lcepl.com',
      to: 'subcontractor@lcepl.com',
      subject: `New Subcontractor Application Received`,
      text: `Hi There, \n \n I wanted to let you know that we have received a new subcontractor application. Please find the applicant's details below: \n \n Name: ${req.body.name} \n \n Phone: ${req.body.phone} \n \n Email: ${req.body.email} \n \n State: ${req.body.state} \n \n Type of Work: ${req.body.typeOfWork} Description: ${req.body.description} \n \n We need to analyze this application to determine if there is a potential opportunity to work with this subcontractor.  \n \n Thank You!`,
    };
    mail.sendMail(mailOptions, function (error, info) {
      console.log({ info }, { error })
      if (error) {
        console.log(error);
        res.send({
          success: false,
          message: 'Failed to apply',
          error
        })
      } else {
        res.send({
          success: true,
          message: 'Applied Successfully'
        })
      }
    });
  } catch (error) {
    console.log('error is', error)
  }
});

app.post('/getInTouch', (req, res) => {
  try {
    var mailOptions = {
      from: 'it@lcepl.com',
      to: 'career@lcepl.com',
      subject: `Request Received from: ${req.body.name}`,
      text: `Hi There, \n \n Deatils of user query are as follow  \n\n Name: ${req.body.name} \n Email: ${req.body.email} \n Subject: ${req.body.subject}\n Message: ${req.body.message}  \n \n Thank You!`,
    };
    mail.sendMail(mailOptions, function (error, info) {
      console.log({ info }, { error })
      if (error) {
        console.log(error);
        res.send({
          success: false,
          message: 'Failed to apply',
          error
        })
      } else {
        res.send({
          success: true,
          message: 'Applied Successfully'
        })
      }
    });
  } catch (error) {
    console.log('error is', error)
  }
});
app.listen(process.env.PORT || PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  else
    console.log("Error occured, server can't start", error);
}
);