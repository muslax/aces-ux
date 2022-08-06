export type CompetenceType = {
  id: string;
  group: 'reasoning' | 'personal' | 'business' | 'operation' | 'social';
  name: string;
  description?: string;
};

export const competences: CompetenceType[] = [
  // REASONING
  { id: '', group: 'reasoning', name: 'Analytical Thinking', description: '' },
  { id: '', group: 'reasoning', name: 'Conceptual Thinking', description: '' },
  { id: '', group: 'reasoning', name: 'Creative Thinking', description: '' },
  { id: '', group: 'reasoning', name: 'Strategic Orientation', description: '' },
  // PERSONAL
  { id: '', group: 'personal', name: 'Achievement Orientation', description: '' },
  { id: '', group: 'personal', name: 'Continuous Learning', description: '' },
  { id: '', group: 'personal', name: 'Integrity', description: '' },
  { id: '', group: 'personal', name: 'Adaptability', description: '' },
  // BUSINESS
  { id: '', group: 'business', name: 'Customer Service Orientation', description: '' },
  { id: '', group: 'business', name: 'Business Sense', description: '' },
  { id: '', group: 'business', name: 'Organizational Awareness', description: '' },
  { id: '', group: 'business', name: 'Continuous Improvement', description: '' },
  // OPERATION
  { id: '', group: 'operation', name: 'Planning Organizing', description: '' },
  { id: '', group: 'operation', name: 'Controlling', description: '' },
  { id: '', group: 'operation', name: 'Decision Making', description: '' },
  // SOCIAL
  { id: '', group: 'social', name: 'Communication', description: '' },
  { id: '', group: 'social', name: 'Collaboration', description: '' },
  { id: '', group: 'social', name: 'Building Partnership', description: '' },
  { id: '', group: 'social', name: 'Leadership', description: '' },
  { id: '', group: 'social', name: 'Developing Others', description: '' },
  { id: '', group: 'social', name: 'Managing Change', description: '' },
  { id: '', group: 'social', name: 'Influencing', description: '' },
];
