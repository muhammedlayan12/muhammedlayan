import nodemailer, { Transporter } from 'nodemailer';

// Create SMTP transporter
const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your Gmail email address
        pass: 'your-gmail-password' // Your Gmail password
    }
});

// Function to send email notification
function sendNotification(message: string): void {
    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender email address
        to: 'muhammedlayan12@gmail.com', // Receiver email address
        subject: 'New Message from Contact Form',
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Usage example
const message: string = 'Hello! You have a new message from your website.';
sendNotification(message);

// Send email notification
function sendNotification(name: string, email: string, message: string): void {
    // Construct message
    const notificationMessage: string = `New message from ${name} (${email}): ${message}`;

    // Call function to send email notification
    sendNotification(notificationMessage);
}
