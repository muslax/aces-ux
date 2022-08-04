import { Text, useMantineTheme } from '@mantine/core';
import Notice from 'components/Notice/Notice';
import Show from 'components/Show';
import { randomNames } from 'lib/names/names';
import { useState } from 'react';

export function Monitoring() {
  const theme = useMantineTheme();
  const colors = theme.colors;
  const [step, setStep] = useState(1);
  const names = randomNames(200);

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
          <div
            style={{
              color: colors.dark[4],
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              padding: '15px 20px',
              backgroundColor: colors.gray[1],
              backgroundImage: theme.fn.linearGradient(
                133,
                theme.colors.indigo[1],
                theme.colors.indigo[0],
                theme.colors.pink[0],
                'white'
              ),
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

/*
<div
            style={{
              display: 'flex',
              gap: 6,
              flexFlow: 'column',
              textTransform: 'uppercase',
              lineHeight: 1,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <div style={{ marginLeft: 6, display: 'flex' }}>
              <div
                style={{
                  padding: 7,
                  fontSize: 14,
                  backgroundColor: colors.gray[3],
                  transform: 'rotate(-7deg)',
                }}
              >
                Total
              </div>
            </div>
            <div style={{ marginLeft: 5, display: 'flex' }}>
              <div
                style={{
                  padding: 7,
                  fontSize: 13,
                  marginTop: -6,
                  marginBottom: -6,
                  color: 'white',
                  // border: '2px solid white',
                  boxShadow: '-2px -2px 0 white',
                  backgroundColor: colors.gray[8],
                  transform: 'rotate(1deg)',
                }}
              >
                Jumlah
              </div>
            </div>
            <div
              style={{
                padding: 8,
                marginLeft: -20,
                backgroundColor: 'rgba(250,230,0,.6)',
                border: '2px solid white',
                transform: 'rotate(10deg)',
              }}
            >
              Pendaftar
            </div>
          </div>
*/
