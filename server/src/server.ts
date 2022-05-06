import express from 'express';
import { prisma } from './prisma';

const port = process.env.PORT || 3333;
const server = express();

interface Request extends express.Request {
  type: string;
  comment: string;
  screenshot?: string;
}

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

    return res.status(201).json({
      data: feedback,
    });
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })