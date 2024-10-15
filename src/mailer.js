const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const mailConfig = {
  service: 'gmail',
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(mailConfig);

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Video Organizer',
    link: 'http://localhost:3000/',
  },
});

const response = (videos, user) => ({
  body: {
    name: user.name,
    intro: `Hi, ${user.name}. Checkout the latest videos.`,
    table: {
      data: videos.map((video) => ({
        url: video.url,
      })),
    },
    outro: 'Hope you liked the videos',
  },
});

const emailSuggestedVideos = async ({ videos, users }) => {
  const emailPromises = users.map((user) => {
    const email = mailGenerator.generate(response(videos, user));
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: 'Video Organizer Suggested Videos',
      html: email,
    };

    transporter.sendMail(mailOptions);
  });
  try {
    return await Promise.all(emailPromises);
  } catch (error) {
    console.error('Mailer Error', error);
  }
};

module.exports = { emailSuggestedVideos };
