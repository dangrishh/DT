const express = require("express");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
app = express();

//send email after 1 minute
cron.schedule("1 * * * *", function () {
  mailService();
});

function mailService() {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "danieldetorres,info@gmail.com",
// use generated app password for gmail
      pass: "DeTorresDaniel3000",
    },
  });

  // setting credentials
  let mailDetails = {
    from: "danieldetorres.info@gmail.com",
    to: "danieldetorres30@gmail.com",
    subject: "Nodejs Developer",
    text: "You did it, you have to be a Celebrate!",
  };

  // sending email
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("error occurred", err.message);
    } else {
      console.log("---------------------");
      console.log("email sent successfully");
    }
  });
}

app.listen(3002, () => {
  console.log("application listening.....");
});
