import useUser from 'lib/useUser';
import { User } from 'pages/api/user';
import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';

interface SessionContextProps {
  sessionUser: User | undefined;
  setSessionUser: Dispatch<User>;
}

const SessionContext = createContext<SessionContextProps>({
  sessionUser: undefined,
  setSessionUser: () => undefined,
});

export function SessionProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const [sessionUser, setSessionUser] = useState(user);

  useEffect(() => {
    if (user) setSessionUser(user);
    return () => {};
  }, [user]);

  return (
    <SessionContext.Provider value={{ sessionUser, setSessionUser }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
