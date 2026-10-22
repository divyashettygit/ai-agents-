export type Language = 'en' | 'hi' | 'te' | 'kn';

export interface FarmerProfile {
  name: string;
  location: string;
  crop: string;
  area: number;
  phone?: string;
  language: Language;
  agriCoins: number;
}

export type ActivePage =
  | 'dashboard'
  | 'disease'
  | 'fertilizer'
  | 'weather'
  | 'soil'
  | 'market'
  | 'assistant'
  | 'products'
  | 'farm';

export interface DiseaseDiagnosisResult {
  diseaseName: string;
  confidence: number;
  severity: 'Low' | 'Moderate' | 'Severe';
  symptoms: string[];
  pathogenType: string;
  organicRemedy: string;
  chemicalTreatment: string;
  prevention: string[];
  expertNote: string;
}

export interface VideoReel {
  id: string;
  title: string;
  titleHi: string;
  titleTe: string;
  titleKn?: string;
  category: string;
  categoryTe?: string;
  duration: string;
  views: string;
  thumbnail: string;
  caption: string;
  captionTe?: string;
  captionHi?: string;
  transcript: string;
  transcriptTe?: string;
  transcriptHi?: string;
  keyPoints: string[];
  keyPointsTe?: string[];
  keyPointsHi?: string[];
  youtubeId: string;
  isShort?: boolean;
}

export interface AgriProduct {
  id: string;
  brand: string;
  name: string;
  category: string;
  activeIngredient: string;
  targetPests: string;
  dosage: string;
  packSize: string;
  mrp: number;
  validBatches: string[];
}

export interface MandiRecord {
  crop: string;
  group: 'Grains' | 'Vegetables' | 'Commercial crops' | 'Pulses';
  mandi: string;
  district: string;
  state: string;
  min: number;
  max: number;
  avg: number;
  trend: string;
  arrivalDate: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  role: string;
  icon: string;
  description: string;
  badge: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  agentId?: string;
  text: string;
  timestamp: string;
  isAudioPlaying?: boolean;
}

export interface FertilizerCalculation {
  crop: string;
  acres: number;
  soilType: string;
  ph: number;
  nitrogenStatus: string;
  stage: string;
  phGuidance: string;
  totals: {
    netN: number;
    netP: number;
    netK: number;
    ureaKg: number;
    ureaBags: string;
    dapKg: number;
    dapBags: string;
    mopKg: number;
    mopBags: string;
    fymTons: number;
  };
  splitSchedule: Array<{
    timing: string;
    urea: string;
    dap: string;
    mop: string;
    notes: string;
  }>;
}
