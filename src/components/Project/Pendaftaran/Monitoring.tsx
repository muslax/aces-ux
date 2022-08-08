import { Text, useMantineTheme } from '@mantine/core';
import Notice from 'components/Notice/Notice';
import Show from 'components/Show';
import { useState } from 'react';

export function Monitoring({ names }: { names: string[] }) {
  const theme = useMantineTheme();
  const colors = theme.colors;
  const [step, setStep] = useState(1);

  return (
    <>
      <Notice
        color="gray"
        closeable
        isOpen={step === 1}
        onClose={() => {
          setStep(0);
          setTimeout(() => setStep(step + 1), 80);
        }}
      >
        <Text size="md" weight={700} mb={10} color={colors.pink[6]}>
          State 1 - Pendaftaran belum dimulai
        </Text>
        <Text size="md" mb={10}>
          Jadi belum ada yang dapat dimonitor.
          <br />
          &rarr; Countdown?
          <br />
          &rarr; Warning?
          <br />
          &rarr; Useful links?
        </Text>
      </Notice>
      <Show when={step === 2}>
        <Notice
          color="gray"
          closeable
          isOpen={step === 1}
          onClose={() => {
            setStep(0);
            setTimeout(() => setStep(step + 1), 80);
          }}
        >
          Pendaftaran sudah ditutup dengan total jumlah pendaftar 4711.
        </Notice>
      </Show>
      <Show when={step === 3}>
        {/* Stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            borderRadius: 7,
            overflow: 'hidden',
            border: `1px solid ${colors.gray[3]}`,
          }}
        >
          <div
            style={{
              color: colors.dark[4],
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              padding: '15px 20px',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>
              Jumlah pendaftar
            </div>
            <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.25 }}>4711</div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>Orang</div>
          </div>
          {/* Petitopak - Infused Potatoes */}
          <div
            style={{
              color: colors.dark[4],
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              padding: '15px 20px',
              backgroundColor: colors.gray[1],
              // backgroundImage: theme.fn.linearGradient(
              //   133,
              //   theme.colors.indigo[1],
              //   theme.colors.indigo[0],
              //   theme.colors.pink[0],
              //   'white'
              // ),
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>
              Sisa waktu
            </div>
            <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.25 }}>63</div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>Jam</div>
          </div>
        </div>

        {/* Names */}
        <Text size="lg" weight={600} mt={30} mb={10} onClick={() => setStep(1)}>
          Daftar nama pendaftar
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {names.map((name) => (
            <div
              key={name}
              style={{
                fontSize: 12,
                padding: '2px 10px 3px 5px',
                backgroundColor: colors.yellow[0],
                // color: colors.dark[8],
                borderLeft: `1px solid ${colors.orange[4]}`,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </Show>
    </>
  );
}
