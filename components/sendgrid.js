import sgMail from '@sendgrid/mail';

export const sendEmail = async (from,to, subject, text) => {
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to,
    from,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};