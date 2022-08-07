import { NextApiRequest, NextApiResponse } from 'next';
import getLayout from './getLayout';
import getProject from './getProject';
import getRandomNorms from './getRandomNorms';

type ApiQuery = {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
};

export const AUTH_QUERIES: ApiQuery = {
  'get-project': getProject,
  'get-layout': getLayout,
  'random-norms': getRandomNorms,
};
