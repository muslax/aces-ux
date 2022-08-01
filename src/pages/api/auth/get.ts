import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_QUERIES } from 'lib/queries';

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user || !user.isLoggedIn) {
    return res.status(401).json({ message: 'Forbidden' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let subject = req.query.subject;
  if (subject === undefined) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  if (Array.isArray(subject)) subject = subject[0];

  if (!Object.keys(AUTH_QUERIES).includes(subject)) {
    return res.status(400).json({ message: 'Bad query subject' });
  }

  return AUTH_QUERIES[subject](req, res);
}
