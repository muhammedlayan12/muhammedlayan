"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
// Create SMTP transporter
var transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your Gmail email address
        pass: 'your-gmail-password' // Your Gmail password
    }
});
// Function to send email notification
function sendNotification(message) {
    // Email content
    var mailOptions = {
        from: 'your-email@gmail.com', // Sender email address
        to: 'muhammedlayan12@gmail.com', // Receiver email address
        subject: 'New Message from Contact Form',
        text: message
    };
    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
        }
        else {
            console.log('Email sent:', info.response);
        }
    });
}
// Usage example
var message = 'Hello! You have a new message from your website.';
sendNotification(message);
// Send email notification
function sendNotification(name, email, message) {
    // Construct message
    var notificationMessage = "New message from ".concat(name, " (").concat(email, "): ").concat(message);
    // Call function to send email notification
    sendNotification(notificationMessage);
}
