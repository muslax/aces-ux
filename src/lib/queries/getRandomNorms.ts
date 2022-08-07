import { randomNorms } from 'lib/norms';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getRandomNorms(req: NextApiRequest, res: NextApiResponse) {
  try {
    let type = req.query.option as string;
    if (type == 'competence') type = 'assessment';
    return res.json(randomNorms(type));
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
