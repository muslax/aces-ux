import ButtonLink from 'components/ButtonLink';
import ModulesTable from './Modules';
import SectionTitle from 'components/SectionTitle';
import { getProductModules, ProductType } from 'lib/modules';
import { ProjectInfo } from 'lib/queries/getProject';
import { useRouter } from 'next/router';
import Competences from './Competences';
import TolokUkur from './TolokUkur';
import Pojo from 'components/Pojo';
import { daftarKompetensi, tolokUkurRekrutmen } from 'lib/benchmark';

export function Setup({ context }: { context: ProjectInfo }) {
  const projectModules = getProductModules(context.type as ProductType);
  const { query } = useRouter();

  const editModules = () => (
    <ButtonLink label="Edit Modules" href={`/projects/${query.id}/edit-modules`} />
  );
  const editOpions = () => <ButtonLink label="Edit Tolok Ukur" href="/clients" />;

  return (
    <>
      <SectionTitle
        mb={20}
        title="Modul yang dipakai"
        description="Daftar modul yang dipakai dalam proyek"
        rightSection={editModules()}
      />

      <ModulesTable modules={projectModules} />

      <SectionTitle
        mt={30}
        mb={20}
        title="Tolok ukur"
        description="Daftar tolok ukur utama yang dipakai dalam proyek"
        rightSection={editOpions()}
      />

      {/* <Pojo object={context} /> */}

      {context.type != 'recruitment' && <Competences items={daftarKompetensi} />}
      {context.type == 'recruitment' && <TolokUkur items={tolokUkurRekrutmen} />}
    </>
  );
}
