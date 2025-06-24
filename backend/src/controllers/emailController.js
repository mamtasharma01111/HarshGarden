import transporter from '../config/email.js';

const sendEmail = async (req, res) => {
  const {
    name,
    email,
    phone,
    checkIn,
    checkOut,
    guests,
    roomType,
    eventType,
    message,
    formType
  } = req.body;

  let subject = '';
  let emailContent = '';

  if (formType === 'booking') {
    subject = 'New Room Booking Request';
    emailContent = `
      <h2>New Room Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-in Date:</strong> ${checkIn}</p>
      <p><strong>Check-out Date:</strong> ${checkOut}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Room Type:</strong> ${roomType}</p>
      <p><strong>Special Requests:</strong> ${message}</p>
    `;
  } else if (formType === 'event') {
    subject = 'New Event Inquiry';
    emailContent = `
      <h2>New Event Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  } else {
    subject = 'New General Inquiry';
    emailContent = `
      <h2>New General Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: emailContent
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export { sendEmail }; 