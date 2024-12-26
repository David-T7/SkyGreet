import { sendEmail } from "@/components/sendgrid";

export default async (req, res) => {
    const { to, from , subject , text } = req.body;
    console.log(from , to , subject , text)
    try {
      await sendEmail(from,to, subject , text);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }