export function getProduct(type: ProductType) {
  return products.find((p) => p.type == type);
}

export function findModule(type: ModuleType) {
  return modules.find((m) => m.type == type);
}

export function getModules(types: ModuleType[]): Module[] {
  return modules.filter((m) => types.includes(m.type));
}

export function getProductModules(type: ProductType): Module[] {
  const product = getProduct(type);
  if (!product) return [];
  const groups = product.groups;
  const modules: Module[] = [];
  groups.forEach((group) => {
    Array.from(group.map.keys()).forEach((mtype) => {
      const module = findModule(mtype);
      if (module) modules.push(module);
    });
  });
  return modules;
}

type TestMethod = 'selftest' | 'simulation' | 'interactive';
export type ProductType = 'assessment' | 'competence' | 'recruitment' | 'potrev';
export type ModuleType =
  | 'AIME'
  | 'CSI'
  | 'LEADERSHIP'
  | 'MANAGEMENT_ACTION'
  | 'DECISION_MAKING'
  | 'EMPOWERMENT'
  | 'I360'
  | 'GPQ'
  | 'G_GATE'
  | 'G_MATE'
  | 'C_RATE'
  | 'INTRAY'
  | 'CAN'
  | 'BEI'
  | 'LGD'
  | 'ROLEPLAY'
  | 'PRESENTATION';

export type Module = {
  type: ModuleType;
  method: TestMethod;
  duration: number;
  name: string;
  description: string;
  conflictWith?: string;
};

export type ModulesGroup = {
  title: string;
  description: string;
  required: boolean;
  map: Map<ModuleType, boolean>;
  // moduleTypes: ModuleType[];
};

export type Product = {
  type: 'assessment' | 'competence' | 'recruitment' | 'potrev';
  title: string;
  description: string;
  selectionGuide: string;
  minimumModules: number;
  groups: ModulesGroup[];
};

export const products: Product[] = [
  {
    type: 'assessment',
    title: 'Assessment Center (LOCAL)',
    description:
      'Paket pengukuran kompetensi yang memenuhi kaidah-kaidah <strong>Assessment Center</strong> internasional, terdiri dari dua modul utama plus dua hingga lima pilihan. Anda dapat menentukan modul pilihan apa saja setelah mengklik tombol Lanjut pada bagian bawah.',
    selectionGuide: 'Silakan memilih sesuai selera...',
    minimumModules: 4,
    groups: [
      {
        title: 'Modul Utama',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: true,
        map: new Map([
          ['C_RATE', true],
          ['GPQ', true],
        ]),
      },
      {
        title: 'Simulasi Mandiri',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['INTRAY', false],
          ['CAN', false],
        ]),
      },
      {
        title: 'Simulasi Interaktif',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['BEI', false],
          ['LGD', false],
          ['ROLEPLAY', false],
          ['PRESENTATION', false],
        ]),
      },
    ],
  },
  {
    type: 'competence',
    title: 'Comptence @ Work (LOCAL)',
    description:
      'Maksimum 4 baris atau sekitar 165 karakter Pengukuran kompetensi yang memenuhi kaidah-kaidah Assessment Center. Terdiri dari dua modul utama plus dua hingga lima pilihan.',
    selectionGuide: 'Silakan memilih sesuai selera...',
    minimumModules: 2,
    groups: [
      {
        title: 'Modul Utama',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: true,
        map: new Map([
          ['G_MATE', true],
          ['GPQ', true],
        ]),
      },
      {
        title: 'Simulasi Mandiri',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['INTRAY', false],
          ['CAN', false],
        ]),
      },
      {
        title: 'Simulasi Interaktif',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['BEI', false],
          ['LGD', false],
          ['ROLEPLAY', false],
          ['PRESENTATION', false],
        ]),
      },
    ],
  },
  {
    type: 'recruitment',
    title: 'Recruitment (LOCAL)',
    description:
      'Paket pengukuran kompetensi yang memenuhi kaidah-kaidah <strong>Assessment Center</strong> internasional, terdiri dari dua modul utama plus dua hingga lima pilihan. Anda dapat menentukan modul pilihan apa saja setelah mengklik tombol Lanjut pada bagian bawah.',
    selectionGuide: 'Silakan memilih sesuai selera...',
    minimumModules: 2,
    groups: [
      {
        title: 'Modul Utama',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: true,
        map: new Map([
          ['G_GATE', true],
          ['GPQ', true],
        ]),
      },
      {
        title: 'Modul Pilihan',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['BEI', false],
          ['LGD', false],
        ]),
      },
    ],
  },
  {
    type: 'potrev',
    title: 'Potential Review (LOCAL)',
    description:
      'Paket pengukuran kompetensi yang memenuhi kaidah-kaidah <strong>Assessment Center</strong> internasional, terdiri dari dua modul utama plus dua hingga lima pilihan. Anda dapat menentukan modul pilihan apa saja setelah mengklik tombol Lanjut pada bagian bawah.',
    selectionGuide: 'Silakan memilih sesuai selera...',
    minimumModules: 1,
    groups: [
      {
        title: 'Personality @ Work',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([['GPQ', false]]),
      },
      {
        title: 'Emotional Management',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['AIME', false],
          ['CSI', false],
        ]),
      },
      {
        title: 'Professional Leadership',
        description: 'Keterangan atau petunjuk singkat tentang kelompok modul ini.',
        required: false,
        map: new Map([
          ['LEADERSHIP', false],
          ['MANAGEMENT_ACTION', false],
          ['DECISION_MAKING', false],
          ['EMPOWERMENT', false],
          ['I360', false],
        ]),
      },
    ],
  },
];

export const modules: Module[] = [
  {
    type: 'AIME',
    method: 'selftest',
    duration: 75,
    name: 'AIME - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'CSI',
    method: 'selftest',
    duration: 75,
    name: 'CSI - Cara Saring Inti',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'LEADERSHIP',
    method: 'selftest',
    duration: 75,
    name: 'Leadership - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'MANAGEMENT_ACTION',
    method: 'selftest',
    duration: 75,
    name: 'Management Action - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'DECISION_MAKING',
    method: 'selftest',
    duration: 75,
    name: 'Decision Making - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'EMPOWERMENT',
    method: 'selftest',
    duration: 75,
    name: 'Empowerment - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'I360',
    method: 'selftest',
    duration: 75,
    name: 'Modul 360 - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'GPQ',
    method: 'selftest',
    duration: 75,
    name: 'GPQ - Gaia Personability Questionnaire',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'G_GATE',
    method: 'selftest',
    duration: 75,
    name: 'G-GATE - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'G_MATE',
    method: 'selftest',
    duration: 75,
    name: 'G-MATE - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'C_RATE',
    method: 'selftest',
    duration: 75,
    name: 'C-RATE - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'INTRAY',
    method: 'simulation',
    duration: 75,
    name: 'Intray - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: 'CAN',
  },
  {
    type: 'CAN',
    method: 'simulation',
    duration: 75,
    name: 'Case Analysis - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: 'INTRAY',
  },
  {
    type: 'BEI',
    method: 'interactive',
    duration: 75,
    name: 'Wawancara - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'LGD',
    method: 'interactive',
    duration: 75,
    name: 'LGD - Leaderless Group Discussion',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'ROLEPLAY',
    method: 'interactive',
    duration: 75,
    name: 'Roleplay - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
  {
    type: 'PRESENTATION',
    method: 'interactive',
    duration: 75,
    name: 'Presentation - Aku Ini Memang Enjoy',
    description: 'Definisi atau keterangan singkat tentang modul ini...',
    conflictWith: '',
  },
];
