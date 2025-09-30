// utils/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,       // e.g. oneclickchiremba@gmail.com
    pass: process.env.GMAIL_PASS,       // App password (not your Gmail login)
  },
});

module.exports = transporter;
