export type Norm = {
  id: string;
  group: string;
  // | 'reasoning'
  // | 'personal'
  // | 'business'
  // | 'operation'
  // | 'social'
  // | 'kognitif'
  // | 'sosial'
  // | 'pengelolaan-diri'
  // | 'pengelolaan-kerja'
  // | '';
  name: string;
  description?: string;
};

export type NormGroup = {
  name: string;
  norms: Norm[];
};

export function randomNorms(type: string, n = 7) {
  if (type == 'assessment') return randomAssessmentNorms(n);
  if (type == 'recruitment') return randomRecruitmentNorms(n);
  return [];
}

export function groupedNorms(type: string): NormGroup[] {
  const src = type == 'recruitment' ? recruitmentNorms : assessmentNorms;
  let groups: NormGroup[] = [];
  src.forEach((norm) => {
    const found = groups.find((g) => g.name == norm.group);
    if (!found) {
      groups.push({ name: norm.group, norms: [norm] });
    } else {
      found.norms.push(norm);
    }
  });
  return groups;
}

function randomRecruitmentNorms(n = 7) {
  const keys = Array.from(Array(recruitmentNorms.length).keys())
    .sort(() => Math.random() - 0.5)
    .splice(0, n);
  const rs: Norm[] = [];
  keys.forEach((k) => {
    rs.push(recruitmentNorms[k]);
  });
  return rs.sort((a, b) => {
    const x = a.group.toLowerCase(),
      y = b.group.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
}

function randomAssessmentNorms(n = 7) {
  const keys = Array.from(Array(assessmentNorms.length).keys())
    .sort(() => Math.random() - 0.5)
    .splice(0, n);
  const rs: Norm[] = [];
  keys.forEach((k) => {
    rs.push(assessmentNorms[k]);
  });
  return rs.sort((a, b) => {
    const x = a.group.toLowerCase(),
      y = b.group.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
}

export const recruitmentNorms: Norm[] = [
  // Kognitif
  { id: '', group: 'Aspek Kognitif', name: 'Berpikir Analitik', description: '' },
  { id: '', group: 'Aspek Kognitif', name: 'Berpikir Konseptual', description: '' },
  { id: '', group: 'Aspek Kognitif', name: 'Kreativitas', description: '' },
  { id: '', group: 'Aspek Kognitif', name: 'Orientasi Stratejik', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Kepedulian Sosial', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Kerjasama', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Networking', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Komunikasi', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Persuasi', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Kepemimpinan', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Asertif', description: '' },
  { id: '', group: 'Aspek Sosial', name: 'Orientasi kepada Pelayanan', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Adaptabilitas', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Kontrol Diri', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Dorongan Berprestasi', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Pengembangan Diri', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Kepercayaan Diri', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Inisiatif', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Toleransi Terhadap Stress', description: '' },
  { id: '', group: 'Aspek Pengelolaan Diri', name: 'Persistensi', description: '' },
  { id: '', group: 'Aspek Pengelolaan Kerja', name: 'Keteraturan Kerja', description: '' },
  { id: '', group: 'Aspek Pengelolaan Kerja', name: 'Sistematika Kerja', description: '' },
  { id: '', group: 'Aspek Pengelolaan Kerja', name: 'Ketelitian Kerja', description: '' },
  { id: '', group: 'Aspek Pengelolaan Kerja', name: 'Pengambilan Keputusan', description: '' },
  { id: '', group: 'Aspek Pengelolaan Kerja', name: 'Kecepatan Kerja', description: '' },
];

export const assessmentNorms: Norm[] = [
  // REASONING
  { id: '', group: 'Reasoning', name: 'Analytical Thinking', description: '' },
  { id: '', group: 'Reasoning', name: 'Conceptual Thinking', description: '' },
  { id: '', group: 'Reasoning', name: 'Creative Thinking', description: '' },
  { id: '', group: 'Reasoning', name: 'Strategic Orientation', description: '' },
  // PERSONAL
  { id: '', group: 'Personal', name: 'Achievement Orientation', description: '' },
  { id: '', group: 'Personal', name: 'Continuous Learning', description: '' },
  { id: '', group: 'Personal', name: 'Integrity', description: '' },
  { id: '', group: 'Personal', name: 'Adaptability', description: '' },
  // BUSINESS
  { id: '', group: 'Business', name: 'Customer Service Orientation', description: '' },
  { id: '', group: 'Business', name: 'Business Sense', description: '' },
  { id: '', group: 'Business', name: 'Organizational Awareness', description: '' },
  { id: '', group: 'Business', name: 'Continuous Improvement', description: '' },
  // OPERATION
  { id: '', group: 'Operation', name: 'Planning Organizing', description: '' },
  { id: '', group: 'Operation', name: 'Controlling', description: '' },
  { id: '', group: 'Operation', name: 'Decision Making', description: '' },
  // SOCIAL
  { id: '', group: 'Social', name: 'Communication', description: '' },
  { id: '', group: 'Social', name: 'Collaboration', description: '' },
  { id: '', group: 'Social', name: 'Building Partnership', description: '' },
  { id: '', group: 'Social', name: 'Leadership', description: '' },
  { id: '', group: 'Social', name: 'Developing Others', description: '' },
  { id: '', group: 'Social', name: 'Managing Change', description: '' },
  { id: '', group: 'Social', name: 'Influencing', description: '' },
];
