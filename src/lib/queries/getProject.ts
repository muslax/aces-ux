import { NextApiRequest, NextApiResponse } from 'next';

export type ProjectInfo = {
  id: string;
  type: string;
  title: string;
  description: string;
};

export default async function getProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = req.query.option as string;
    // Simulate error
    if (!id || id.split('-').length == 1) {
      return res.status(404).json({ message: 'Not found' });
    }
    const type = id.split('-')[1];
    return res.json({
      id,
      type: type,
      title: 'Sample Project',
      description: 'Project description ...',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
