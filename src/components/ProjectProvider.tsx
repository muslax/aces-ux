import { ProjectInfo } from 'lib/queries/getProject';
import { createContext, Dispatch, ReactNode, useState } from 'react';

export interface ProjectContextProps {
  projectContext: ProjectInfo | undefined;
  setProjectContext: Dispatch<ProjectInfo>;
}

const ProjectContext = createContext<ProjectContextProps>({
  projectContext: undefined,
  setProjectContext: () => undefined,
});

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projectContext, setProjectContext] = useState<ProjectInfo | undefined>(undefined);
  return (
    <ProjectContext.Provider value={{ projectContext, setProjectContext }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
