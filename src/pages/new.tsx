import Header from 'components/Layout/Header';
import { ReactElement } from 'react';

export default function NewProject() {
  return (
    <div>
      <h1>New Project</h1>
    </div>
  );
}

NewProject.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
