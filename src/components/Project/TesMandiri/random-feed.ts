import cuid from 'cuid';
import { randomNames } from 'lib/names/names';

const norms = [1, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 5];
const randomValue = () => norms.sort(() => Math.random() - 0.5)[0];

export interface Person {
  id: number;
  key: string;
  name: string;
  // rekomendasi: string;
  va: number;
  vb: number;
  vc: number;
  vd: number;
  vx: number;
  checked: boolean;
  hidden: boolean;
}

export function randomFeed(n = 100) {
  const pop = n > 10 ? n : 10;
  const rs: Person[] = [];
  let index = 1;
  randomNames(pop).forEach((name) => {
    const va = randomValue();
    const vb = randomValue();
    const vc = randomValue();
    const vd = randomValue();
    const vx = (va + vb + vc + vd) / 4;
    rs.push({
      id: index,
      key: cuid.slug(),
      va,
      vb,
      vc,
      vd,
      vx,
      checked: false,
      name,
      hidden: false,
    });
  });
  return rs;
}
