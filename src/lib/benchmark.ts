export type Benchmark = {
  id: string;
  group: 'reasoning' | 'personal' | 'business' | 'operation' | 'social' | '';
  rgroup: 'kognitif' | 'sosial' | 'pengelolaan-diri' | 'pengelolaan-kerja' | '';
  name: string;
  description?: string;
};

export const tolokUkurRekrutmen: Benchmark[] = [
  // Kognitif
  { id: '', group: '', rgroup: 'kognitif', name: 'Berpikir Analitik', description: '' },
  { id: '', group: '', rgroup: 'kognitif', name: 'Berpikir Konseptual', description: '' },
  { id: '', group: '', rgroup: 'kognitif', name: 'Kreativitas', description: '' },
  { id: '', group: '', rgroup: 'kognitif', name: 'Orientasi Stratejik', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Kepedulian Sosial', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Kerjasama', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Networking', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Komunikasi', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Persuasi', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Kepemimpinan', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Asertif', description: '' },
  { id: '', group: '', rgroup: 'sosial', name: 'Orientasi kepada Pelayanan', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Adaptabilitas', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Kontrol Diri', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Dorongan Berprestasi', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Pengembangan Diri', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Kepercayaan Diri', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Inisiatif', description: '' },
  {
    id: '',
    group: '',
    rgroup: 'pengelolaan-diri',
    name: 'Toleransi Terhadap Stress',
    description: '',
  },
  { id: '', group: '', rgroup: 'pengelolaan-diri', name: 'Persistensi', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-kerja', name: 'Keteraturan Kerja', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-kerja', name: 'Sistematika Kerja', description: '' },
  { id: '', group: '', rgroup: 'pengelolaan-kerja', name: 'Ketelitian Kerja', description: '' },
  {
    id: '',
    group: '',
    rgroup: 'pengelolaan-kerja',
    name: 'Pengambilan Keputusan',
    description: '',
  },
  { id: '', group: '', rgroup: 'pengelolaan-kerja', name: 'Kecepatan Kerja', description: '' },
];

export const daftarKompetensi: Benchmark[] = [
  // REASONING
  { id: '', group: 'reasoning', rgroup: '', name: 'Analytical Thinking', description: '' },
  { id: '', group: 'reasoning', rgroup: '', name: 'Conceptual Thinking', description: '' },
  { id: '', group: 'reasoning', rgroup: '', name: 'Creative Thinking', description: '' },
  { id: '', group: 'reasoning', rgroup: '', name: 'Strategic Orientation', description: '' },
  // PERSONAL
  { id: '', group: 'personal', rgroup: '', name: 'Achievement Orientation', description: '' },
  { id: '', group: 'personal', rgroup: '', name: 'Continuous Learning', description: '' },
  { id: '', group: 'personal', rgroup: '', name: 'Integrity', description: '' },
  { id: '', group: 'personal', rgroup: '', name: 'Adaptability', description: '' },
  // BUSINESS
  { id: '', group: 'business', rgroup: '', name: 'Customer Service Orientation', description: '' },
  { id: '', group: 'business', rgroup: '', name: 'Business Sense', description: '' },
  { id: '', group: 'business', rgroup: '', name: 'Organizational Awareness', description: '' },
  { id: '', group: 'business', rgroup: '', name: 'Continuous Improvement', description: '' },
  // OPERATION
  { id: '', group: 'operation', rgroup: '', name: 'Planning Organizing', description: '' },
  { id: '', group: 'operation', rgroup: '', name: 'Controlling', description: '' },
  { id: '', group: 'operation', rgroup: '', name: 'Decision Making', description: '' },
  // SOCIAL
  { id: '', group: 'social', rgroup: '', name: 'Communication', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Collaboration', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Building Partnership', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Leadership', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Developing Others', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Managing Change', description: '' },
  { id: '', group: 'social', rgroup: '', name: 'Influencing', description: '' },
];
