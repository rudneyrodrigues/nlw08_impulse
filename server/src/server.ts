import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const port = process.env.PORT || 3333;
const server = express();

interface Request extends express.Request {
  type: string;
  comment: string;
  screenshot?: string;
}

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f09a335bc01a9",
    pass: "8d1434d7160324"
  }
});

server
  .use(express.json())
  .post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot }: Request = req.body;

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rudney Rodrigues <rudney.un2016@gmail.com>',
      subject: `Novo feedback | ${type}`,
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário do feedback: ${comment}</p>`,
        `</div>`,
      ].join('\n'),
    })

    return res.status(201).json({
      data: feedback,
    });
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })