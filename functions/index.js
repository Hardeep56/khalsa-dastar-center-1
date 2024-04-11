const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// Initialize Cloud Firestore
const db = admin.firestore();

// Configure the nodemailer transporter
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendFormDataEmail = functions.https.onCall(async (data, context) => {
  const mailOptions = {
    from: gmailEmail,
    to: "khalsadastarcenter@gmail.com",
    subject: "New Turban Tying Service Booking",
    text: `Name: ${data.name}\nNumber of People: ${data.numPeople}\nTime: 
    ${data.time}\nLocation: ${data.location}`,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Save the form data to Cloud Firestore
    await db.collection("formData").add(data);

    return {success: true};
  } catch (error) {
    console.error("Error sending email:", error);
    return {success: false, error: error.toString()};
  }
});
