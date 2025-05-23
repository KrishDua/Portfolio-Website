import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Krish Dua <Krishdua312@gmail.com>',
    to: ['Krishdua312@gmail.com'],
    subject: 'Hello world',
    react: <>
        <p>Email Body</p>
            </>
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};