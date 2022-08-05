import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLayout(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.json({
      type: 'layout',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
