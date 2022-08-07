import ButtonLink from 'components/ButtonLink';
import DaftarModul from './DaftarModul';
import SectionTitle from 'components/SectionTitle';
import { ProjectInfo } from 'lib/queries/getProject';
import { useRouter } from 'next/router';
import DaftarNorma from './DaftarNorma';

export function Setup({ context }: { context: ProjectInfo }) {
  // const daftarModul = getProductModules(context.type as ProductType);
  const { query } = useRouter();

  const editModules = () => (
    <ButtonLink label="Edit Modules" href={`/projects/${query.id}/edit-modules`} />
  );
  const editOpions = () => (
    <ButtonLink label="Edit Tolok Ukur" href={`/projects/${query.id}/edit-norms`} />
  );

  return (
    <>
      <SectionTitle mb={20} title="Modul yang dipakai" rightSection={editModules()} />

      <DaftarModul />

      {context.type != 'potrev' && (
        <>
          <SectionTitle
            mt={30}
            mb={20}
            title="Tolok ukur"
            description="Daftar tolok ukur utama yang dipakai dalam proyek"
            rightSection={editOpions()}
          />
          <DaftarNorma type={context.type} />
        </>
      )}
    </>
  );
}
