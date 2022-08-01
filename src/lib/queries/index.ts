import { NextApiRequest, NextApiResponse } from 'next';
import getProject from './getProject';

type ApiQuery = {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
};

export const AUTH_QUERIES: ApiQuery = {
  'get-project': getProject,
};
