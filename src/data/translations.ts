import { Language } from '../types';

export interface AppTranslation {
  // General & Header
  appName: string;
  subTitle: string;
  namaskar: string;
  smartFarming: string;
  tagline: string;
  overview: string;
  cropDoctor: string;
  fertilizerAdvice: string;
  verifyProducts: string;
  agriProducts: string;
  weatherPlanner: string;
  soilNutrients: string;
  mandiPrices: string;
  aiAgents: string;
  myFarm: string;
  agriCoins: string;
  askAgriSathi: string;
  switchModeMobile: string;
  switchModeDesktop: string;
  farmWorkspace: string;
  switchFarmer: string;
  listening: string;
  speakNow: string;
  coinsEarned: string;

  // Dashboard
  heroTitle: string;
  heroSub: string;
  heroDesc: string;
  diagnoseLeafBtn: string;
  activeFarmBadge: string;
  localWeather: string;
  registeredCrop: string;
  mandiBenchmark: string;
  tasksCompleted: string;
  dailyChecks: string;
  whatToDo: string;
  whatToDoSub: string;
  dailyChecklist: string;
  dailyChecklistSub: string;
  safetyDisclaimer: string;
  videosForYou: string;
  videosForYouSub: string;
  seeAll: string;

  // Checklist items
  check1Title: string;
  check1Desc: string;
  check2Title: string;
  check2Desc: string;
  check3Title: string;
  check3Desc: string;
  check4Title: string;
  check4Desc: string;

  // Crop Doctor
  cropDoctorTitle: string;
  cropDoctorSubtitle: string;
  targetCrop: string;
  observedSymptoms: string;
  symptomsPlaceholder: string;
  dropPhoto: string;
  uploadLeafBtn: string;
  changePhoto: string;
  sampleSpecimens: string;
  tomatoLeaf: string;
  earlyBlight: string;
  paddyLeaf: string;
  brownSpot: string;
  scanBtn: string;
  scanning: string;
  audioReadAloud: string;
  listenVoice: string;
  stopVoice: string;
  observedPathology: string;
  organicRemedyTitle: string;
  chemicalSprayTitle: string;
  preventionTitle: string;
  agronomistNote: string;
  noDiagnosisYet: string;
  noDiagnosisSub: string;

  // Fertilizer
  fertilizerTitle: string;
  fertilizerSub: string;
  landAcres: string;
  soilType: string;
  soilPh: string;
  nitrogenStatus: string;
  growthStage: string;
  calculateDoseBtn: string;
  calculating: string;
  fertilizerDosesFor: string;
  targetArea: string;
  downloadPlan: string;
  ureaTitle: string;
  dapTitle: string;
  mopTitle: string;
  fymTitle: string;
  bags50kg: string;
  soilHealthGuidance: string;
  splitScheduleTitle: string;

  // Product Verification
  verifyTitle: string;
  verifySubtitle: string;
  scanQrPrompt: string;
  sampleBatchCodes: string;
  enterBatchLabel: string;
  batchPlaceholder: string;
  verifyAuthenticityBtn: string;
  verifying: string;
  genuineBatch: string;
  warningBatch: string;
  activeCompound: string;
  recommendedDosage: string;

  // Products Catalog
  storeTitle: string;
  storeSubtitle: string;
  searchProductsPlaceholder: string;
  catAll: string;
  catFungicides: string;
  catInsecticides: string;
  catBioFertilizer: string;
  catOrganic: string;
  targetProblems: string;
  packOptions: string;
  verifyAuthenticity: string;

  // Weather
  weatherTitle: string;
  weatherSubtitle: string;
  currentMicroclimate: string;
  updateLocation: string;
  enterDistrictPlaceholder: string;
  humidity: string;
  windSpeed: string;
  rainChance: string;
  uvIndex: string;
  sprayingWindowSafe: string;
  sprayingWindowCaution: string;
  sprayingAdviceSafe: string;
  sprayingAdviceCaution: string;
  irrigationTitle: string;
  irrigationAdvice: string;
  forecast5Day: string;

  // Soil
  soilTitle: string;
  soilSubtitle: string;
  enterSoilValues: string;
  soilPhLabel: string;
  organicCarbonLabel: string;
  soilTextureLabel: string;
  generateSoilBtn: string;
  soilDiagnosisTitle: string;
  phAssessment: string;
  organicCarbonAdvice: string;
  proceedToFertilizer: string;

  // Mandi
  mandiTitle: string;
  mandiSubtitle: string;
  exportCsvBtn: string;
  searchMandiPlaceholder: string;
  commodityCrop: string;
  marketYard: string;
  minRate: string;
  maxRate: string;
  avgRate: string;
  marketTrend: string;
  showingRecords: string;

  // Multi-Agent Chat
  agentTitle: string;
  agentSubtitle: string;
  clearChat: string;
  chatPlaceholder: string;
  send: string;
  suggestionsLabel: string;
  orchestrationLog: string;
  orchestrationSub: string;
  academicAlignment: string;

  // Video Shorts
  shortsTitle: string;
  watchReel: string;
  claimReward: string;
  claimed: string;
  takeaways: string;
  transcriptTitle: string;
  nextVideo: string;
  prevVideo: string;
}

export const I18N: Record<Language, AppTranslation> = {
  en: {
    appName: 'AgriSathi',
    subTitle: 'Multi-Agent AI Farming',
    namaskar: 'Namaskar',
    smartFarming: 'Smart Farming',
    tagline: 'Your farm. Your data. Your next better harvest.',
    overview: 'Overview',
    cropDoctor: 'Crop Doctor',
    fertilizerAdvice: 'Fertilizer Advice',
    verifyProducts: 'Verify Products',
    agriProducts: 'Agri Store',
    weatherPlanner: 'Weather Planner',
    soilNutrients: 'Soil & Nutrients',
    mandiPrices: 'Mandi Prices',
    aiAgents: 'AI Multi-Agent',
    myFarm: 'My Farm',
    agriCoins: 'AgriCoins',
    askAgriSathi: 'Ask AgriSathi',
    switchModeMobile: 'Mobile App View',
    switchModeDesktop: 'Portal Workspace',
    farmWorkspace: 'FARM WORKSPACE',
    switchFarmer: 'Switch Farmer',
    listening: 'Listening to your voice...',
    speakNow: 'Speak your question in your language...',
    coinsEarned: 'Coins earned',

    heroTitle: 'Namaskar',
    heroSub: 'Grow smarter. Harvest with confidence.',
    heroDesc: 'Integrate leaf disease diagnosis, personalized fertilizer dosing, local weather alerts, and mandi market prices into one unified assistant.',
    diagnoseLeafBtn: 'Diagnose Leaf Disease',
    activeFarmBadge: 'ACTIVE FARM PROFILE',
    localWeather: 'Local Weather',
    registeredCrop: 'Registered Crop',
    mandiBenchmark: 'Mandi Benchmark',
    tasksCompleted: 'Tasks Completed',
    dailyChecks: 'Daily agronomy checks',
    whatToDo: 'What would you like to do?',
    whatToDoSub: 'Essential digital farming tools at your fingertips',
    dailyChecklist: 'Daily Farm Checklist',
    dailyChecklistSub: 'Complete daily farm inspection checks',
    safetyDisclaimer: 'AgriSathi AI suggestions assist farmer decisions. Always consult your Mandal Agriculture Officer for local chemical prescriptions.',
    videosForYou: 'Videos for you',
    videosForYouSub: 'Educational shorts & advisory clips for field practices',
    seeAll: 'See all',

    check1Title: 'Inspect Crop Leaves',
    check1Desc: 'Look for fungal spots, chlorosis, or pests.',
    check2Title: 'Check Root Zone Moisture',
    check2Desc: 'Assess soil moisture before turning on pumps.',
    check3Title: 'Review Weather & Spray Window',
    check3Desc: 'Verify wind and rain before chemical spraying.',
    check4Title: 'Compare Mandi Benchmark Prices',
    check4Desc: 'Check current rates before harvesting.',

    cropDoctorTitle: 'Crop Doctor AI',
    cropDoctorSubtitle: 'PlantVillage Deep Learning + Multimodal Vision Analysis',
    targetCrop: 'Target Crop',
    observedSymptoms: 'Observed Symptoms',
    symptomsPlaceholder: 'e.g. Brown circular spots, yellow edges, wilting...',
    dropPhoto: 'Drop leaf photo or browse',
    uploadLeafBtn: 'Upload Leaf Image',
    changePhoto: 'Change Photo',
    sampleSpecimens: 'Sample Leaf Specimens',
    tomatoLeaf: 'Tomato Leaf',
    earlyBlight: 'Early Blight',
    paddyLeaf: 'Paddy Leaf',
    brownSpot: 'Brown Spot',
    scanBtn: 'Scan & Diagnose Disease (+100 🪙)',
    scanning: 'Analyzing with Vision AI...',
    audioReadAloud: 'Audio Read-Aloud for Farmers',
    listenVoice: '🔊 Listen Voice',
    stopVoice: '⏹ Stop Audio',
    observedPathology: 'Observed Pathology Symptoms',
    organicRemedyTitle: 'Organic Biological Remedy',
    chemicalSprayTitle: 'Approved Chemical Spray',
    preventionTitle: 'Field Prevention Practices',
    agronomistNote: 'Agronomist Note:',
    noDiagnosisYet: 'No Diagnosis Run Yet',
    noDiagnosisSub: 'Select a sample leaf above or upload your farm leaf photo, then click "Scan & Diagnose Disease".',

    fertilizerTitle: 'Fertilizer & Nutrient Advice',
    fertilizerSub: 'Calculate exact bag counts and split application calendar',
    landAcres: 'Land (Acres)',
    soilType: 'Soil Type',
    soilPh: 'Soil pH',
    nitrogenStatus: 'Soil Nitrogen',
    growthStage: 'Growth Stage',
    calculateDoseBtn: 'Calculate Fertilizer Dose (+75 🪙)',
    calculating: 'Calculating Dosages...',
    fertilizerDosesFor: 'Fertilizer Doses for',
    targetArea: 'Target Area',
    downloadPlan: 'Download Plan',
    ureaTitle: 'Urea (46% N)',
    dapTitle: 'DAP (18-46-0)',
    mopTitle: 'MOP (Potash)',
    fymTitle: 'Compost / FYM',
    bags50kg: '50kg bags',
    soilHealthGuidance: 'Soil Health Guidance:',
    splitScheduleTitle: 'Split Application Schedule',

    verifyTitle: 'Verify Agri Products',
    verifySubtitle: 'Scan QR or enter batch number to verify CIBRC authenticity',
    scanQrPrompt: 'Point camera at product QR code or enter code below',
    sampleBatchCodes: 'Sample Certified Batch Codes',
    enterBatchLabel: 'Enter Batch Code / Hologram ID',
    batchPlaceholder: 'e.g. BYR-2026-NTV-8819',
    verifyAuthenticityBtn: 'Verify Product Authenticity (+50 🪙)',
    verifying: 'Checking CIBRC Registry...',
    genuineBatch: '100% Genuine Certified Batch',
    warningBatch: 'Verification Warning',
    activeCompound: 'Active Compound:',
    recommendedDosage: 'Recommended Dosage:',

    storeTitle: 'Agri Store & Product Catalog',
    storeSubtitle: 'Official dosages, active ingredients, and verified batch numbers',
    searchProductsPlaceholder: 'Search products, pests, or active chemicals...',
    catAll: 'All',
    catFungicides: 'Fungicides',
    catInsecticides: 'Insecticides',
    catBioFertilizer: 'Bio-Fertilizer',
    catOrganic: 'Organic',
    targetProblems: 'Target Problems:',
    packOptions: 'Pack Options:',
    verifyAuthenticity: 'Verify Authenticity',

    weatherTitle: 'Agricultural Weather Advisory',
    weatherSubtitle: 'Micro-climate tracking, spraying windows, and irrigation scheduling',
    currentMicroclimate: 'Current Micro-Climate',
    updateLocation: 'Update Location',
    enterDistrictPlaceholder: 'Enter district or city...',
    humidity: 'Relative Humidity',
    windSpeed: 'Wind Velocity',
    rainChance: 'Precipitation Prob',
    uvIndex: 'UV Index',
    sprayingWindowSafe: 'Foliar Spraying Window: OPEN (Safe Today)',
    sprayingWindowCaution: 'Foliar Spraying Window: CAUTION',
    sprayingAdviceSafe: 'Wind speed is below 15 km/h and rain probability is low. Best window for pesticide or foliar spray is between 7:30 AM - 10:30 AM or 4:30 PM - 6:30 PM.',
    sprayingAdviceCaution: 'High precipitation risk in the next 24 hours. Postpone foliar fungicides or pesticides to prevent wash-off.',
    irrigationTitle: 'Irrigation & Moisture Management',
    irrigationAdvice: 'Maintain optimal moisture in root zone. Alternate Wetting and Drying saves up to 25% irrigation water in paddy.',
    forecast5Day: '5-Day Agricultural Forecast',

    soilTitle: 'Soil Health & Nutrient Management',
    soilSubtitle: 'Interpret soil test values, correct acidity/alkalinity, and optimize biological activity',
    enterSoilValues: 'Enter Soil Test Card Values',
    soilPhLabel: 'Soil pH Level (0 - 14)',
    organicCarbonLabel: 'Organic Carbon Status',
    soilTextureLabel: 'Field Soil Texture',
    generateSoilBtn: 'Generate Soil Guidance (+50 🪙)',
    soilDiagnosisTitle: 'Soil Health Diagnosis',
    phAssessment: 'pH Assessment',
    organicCarbonAdvice: 'Organic Carbon & Biological Life',
    proceedToFertilizer: 'Proceed to NPK Bag Dosage Calculator',

    mandiTitle: 'APMC Real-Time Market Intelligence',
    mandiSubtitle: 'Compare commodity rates across regional regulated markets & export datasets',
    exportCsvBtn: 'Export Dataset (CSV)',
    searchMandiPlaceholder: 'Search crop or mandi yard...',
    commodityCrop: 'Commodity / Crop',
    marketYard: 'Market Yard (APMC)',
    minRate: 'Min Rate',
    maxRate: 'Max Rate',
    avgRate: 'Modal / Avg Rate',
    marketTrend: 'Market Trend',
    showingRecords: 'Showing records from monitored APMC markets',

    agentTitle: 'AgriSathi AI Specialist Agents',
    agentSubtitle: '',
    clearChat: 'Clear Conversation',
    chatPlaceholder: 'Ask about crop diseases, fertilizers, weather, or market rates...',
    send: 'Send',
    suggestionsLabel: 'Suggestions:',
    orchestrationLog: 'Multi-Agent Orchestration Log',
    orchestrationSub: 'Real-time routing history across specialist agents',
    academicAlignment: 'Multi-Agent System Alignment',

    shortsTitle: 'Farming Shorts & Reels',
    watchReel: 'Watch Advisory Reel',
    claimReward: 'Claim +50 🪙 Coins',
    claimed: 'Watched (+50 🪙 Added)',
    takeaways: 'Key Agronomic Takeaways',
    transcriptTitle: 'Audio Advisory Transcript',
    nextVideo: 'Next Short ❯',
    prevVideo: '❮ Previous',
  },

  te: {
    appName: 'అగ్రిసాథి',
    subTitle: 'మల్టీ-ఏజెంట్ AI వ్యవసాయం',
    namaskar: 'నమస్కారం',
    smartFarming: 'స్మార్ట్ వ్యవసాయం',
    tagline: 'మీ వ్యవసాయం. మీ డేటా. మీ మెరుగైన పంట దిగుబడి.',
    overview: 'అవలోకనం',
    cropDoctor: 'క్రాప్ డాక్టర్',
    fertilizerAdvice: 'ఎరువుల సలహా',
    verifyProducts: 'ఉత్పత్తి ధృవీకరణ',
    agriProducts: 'వ్యవసాయ స్టోర్',
    weatherPlanner: 'వాతావరణం',
    soilNutrients: 'మట్టి & ఎరువులు',
    mandiPrices: 'మార్కెట్ ధరలు',
    aiAgents: 'AI ఏజెంట్లు',
    myFarm: 'నా వ్యవసాయం',
    agriCoins: 'అగ్రి కాయిన్స్',
    askAgriSathi: 'అగ్రిసాథిని అడగండి',
    switchModeMobile: 'మొబైల్ యాప్ వ్యూ',
    switchModeDesktop: 'పోర్టల్ వర్క్‌స్పేస్',
    farmWorkspace: 'వ్యవసాయ వర్క్‌స్పేస్',
    switchFarmer: 'రైతు మార్చండి',
    listening: 'మీ మాటలను వింటున్నాము...',
    speakNow: 'మీ ప్రశ్నను స్పష్టంగా మాట్లాడండి...',
    coinsEarned: 'కాయిన్స్ సంపాదించారు',

    heroTitle: 'నమస్కారం',
    heroSub: 'తెలివిగా సాగు చేయండి. నమ్మకంతో పంట కోయండి.',
    heroDesc: 'ఆకు తెగుళ్ల గుర్తింపు, ఖచ్చితమైన ఎరువుల మోతాదు, స్థానిక వాతావరణ హెచ్చరికలు మరియు మార్కెట్ ధరలను ఒకే స్మార్ట్ వేదికపై పొందండి.',
    diagnoseLeafBtn: 'ఆకు తెగులును గుర్తించండి',
    activeFarmBadge: 'ప్రస్తుత పంట వివరాలు',
    localWeather: 'స్థానిక వాతావరణం',
    registeredCrop: 'నమోదైన పంట',
    mandiBenchmark: 'మార్కెట్ సగటు ధర',
    tasksCompleted: 'పూర్తయిన పనులు',
    dailyChecks: 'రోజువారీ వ్యవసాయ తనిఖీలు',
    whatToDo: 'మీరు ఏమి చేయాలనుకుంటున్నారు?',
    whatToDoSub: 'అవసరమైన వ్యవసాయ డిజిటల్ సాధనాలు మీ చేతిలోనే',
    dailyChecklist: 'రోజువారీ వ్యవసాయ తనిఖీ జాబితా',
    dailyChecklistSub: 'రోజువారీ వ్యవసాయ తనిఖీ పనులను పూర్తి చేయండి',
    safetyDisclaimer: 'అగ్రిసాథి AI సలహాలు రైతులకు నిర్ణయాల్లో తోడ్పడతాయి. రసాయన పిచికారీకి ముందు స్థానిక వ్యవసాయ అధికారిని సంప్రదించండి.',
    videosForYou: 'రైతుల కోసం వీడియోలు',
    videosForYouSub: 'పంట యాజమాన్యం మరియు ప్రభుత్వ పథకాలపై వీడియో రీల్స్',
    seeAll: 'అన్నీ చూడండి',

    check1Title: 'పంట ఆకులను పరిశీలించండి',
    check1Desc: 'శిలీంధ్ర మచ్చలు, పసుపు రంగు లేదా పురుగులను గమనించండి.',
    check2Title: 'వేరు భాగంలో నేల తేమను తనిఖీ చేయండి',
    check2Desc: 'మోటారు వేసే ముందు నేలలో తేమను పరీక్షించండి.',
    check3Title: 'వాతావరణం & పిచికారీ సమయాన్ని సమీక్షించండి',
    check3Desc: 'గాలి వేగం మరియు వర్ష సూచన చూసిన తర్వాతే పిచికారీ చేయండి.',
    check4Title: 'మార్కెట్ మండీ ధరలను సరిపోల్చండి',
    check4Desc: 'పంట కోతకు ముందు సమీప మార్కెట్ ధరలను తనిఖీ చేయండి.',

    cropDoctorTitle: 'క్రాప్ డాక్టర్ AI (వ్యాధి నిర్ధారణ)',
    cropDoctorSubtitle: 'ప్లాంట్ విలేజ్ డీప్ లెర్నింగ్ + మల్టీమోడల్ విజన్ విశ్లేషణ',
    targetCrop: 'పంటను ఎంచుకోండి',
    observedSymptoms: 'కనిపిస్తున్న లక్షణాలు',
    symptomsPlaceholder: 'ఉదా: గుండ్రటి గోధుమ మచ్చలు, పసుపు అంచులు, ఆకులు ముడుచుకుపోవడం...',
    dropPhoto: 'ఆకు ఫోటోను ఇక్కడ ఉంచండి లేదా ఎంచుకోండి',
    uploadLeafBtn: 'ఆకు ఫోటోను అప్‌లోడ్ చేయండి',
    changePhoto: 'ఫోటో మార్చండి',
    sampleSpecimens: 'నమూనా ఆకు నమూనాలు',
    tomatoLeaf: 'టమాటా ఆకు',
    earlyBlight: 'ఎర్లీ బ్లైట్ తెగులు',
    paddyLeaf: 'వరి ఆకు',
    brownSpot: 'గోధుమ మచ్చ తెగులు',
    scanBtn: 'వ్యాధిని నిర్ధారించండి (+100 🪙)',
    scanning: 'AI ద్వారా ఆకును పరీక్షిస్తున్నాము...',
    audioReadAloud: 'రైతుల కోసం ఆడియో ద్వారా చదివి వినిపించండి',
    listenVoice: '🔊 వాయిస్ వినండి',
    stopVoice: '⏹ ఆడియో ఆపండి',
    observedPathology: 'గమనించిన తెగులు లక్షణాలు',
    organicRemedyTitle: 'సేంద్రీయ జీవ నివారణ (Organic Remedy)',
    chemicalSprayTitle: 'ఆమోదించబడిన రసాయన మందుల పిచికారీ (Chemical Spray)',
    preventionTitle: 'పొలంలో పాటించవలసిన జాగ్రత్తలు (Prevention)',
    agronomistNote: 'వ్యవసాయ శాస్త్రవేత్త సూచన:',
    noDiagnosisYet: 'ఇంకా వ్యాధి నిర్ధారణ చేయలేదు',
    noDiagnosisSub: 'పైన నమూనా ఆకును ఎంచుకోండి లేదా మీ పొలం ఆకు ఫోటోను అప్‌లోడ్ చేసి "వ్యాధిని నిర్ధారించండి" బటన్ నొక్కండి.',

    fertilizerTitle: 'ఎరువుల మోతాదు మరియు పోషకాల సలహా',
    fertilizerSub: 'ఖచ్చితమైన బస్తాల సంఖ్య మరియు దశల వారీ ఎరువుల షెడ్యూల్',
    landAcres: 'భూమి విస్తీర్ణం (ఎకరాలు)',
    soilType: 'నేల రకం',
    soilPh: 'నేల pH విలువ',
    nitrogenStatus: 'నత్రజని స్థాయి',
    growthStage: 'పంట ప్రస్తుత దశ',
    calculateDoseBtn: 'ఎరువుల మోతాదును లెక్కించండి (+75 🪙)',
    calculating: 'మోతాదును లెక్కిస్తున్నాము...',
    fertilizerDosesFor: 'సిఫార్సు చేయబడిన ఎరువులు:',
    targetArea: 'ఎకరాల విస్తీర్ణం',
    downloadPlan: 'ప్రణాళిక డౌన్‌లోడ్',
    ureaTitle: 'యూరియా (46% N)',
    dapTitle: 'డి.ఎ.పి (18-46-0)',
    mopTitle: 'పొటాష్ (MOP)',
    fymTitle: 'పశువుల ఎరువు / కంపోస్ట్',
    bags50kg: '50 కిలోల బస్తాలు',
    soilHealthGuidance: 'నేల ఆరోగ్యం & agronomic సూచన:',
    splitScheduleTitle: 'దశల వారీగా ఎరువుల విభజన షెడ్యూల్',

    verifyTitle: 'వ్యవసాయ ఉత్పత్తుల ధృవీకరణ',
    verifySubtitle: 'నకిలీ మందులను గుర్తించడానికి QR కోడ్ లేదా బ్యాచ్ నంబర్ నమోదు చేయండి',
    scanQrPrompt: 'ఉత్పత్తి QR కోడ్ వైపు కెమెరా చూపించండి లేదా కింద కోడ్ నమోదు చేయండి',
    sampleBatchCodes: 'నమూనా ధృవీకరించబడిన బ్యాచ్ కోడ్‌లు',
    enterBatchLabel: 'బ్యాచ్ కోడ్ / హోలోగ్రామ్ నంబర్',
    batchPlaceholder: 'ఉదా: BYR-2026-NTV-8819',
    verifyAuthenticityBtn: 'ఉత్పత్తి అసలైనదా కాదా ధృవీకరించండి (+50 🪙)',
    verifying: 'ప్రభుత్వ రిజిస్ట్రీలో తనిఖీ చేస్తున్నాము...',
    genuineBatch: '100% అసలైన ధృవీకరించబడిన బ్యాచ్',
    warningBatch: 'ధృవీకరణ హెచ్చరిక: బ్యాచ్ గుర్తించబడలేదు',
    activeCompound: 'క్రియాశీల మందు సమ్మేళనం:',
    recommendedDosage: 'సిఫార్సు చేసిన మోతాదు:',

    storeTitle: 'వ్యవసాయ స్టోర్ & ఉత్పత్తుల డైరెక్టరీ',
    storeSubtitle: 'అధికారిక మోతాదులు, మందుల పేర్లు మరియు ధృవీకరించబడిన బ్యాచ్‌లు',
    searchProductsPlaceholder: 'మందులు, తెగుళ్లు లేదా ఉత్పత్తులను వెతకండి...',
    catAll: 'అన్నీ',
    catFungicides: 'శిలీంధ్ర నాశినులు (Fungicides)',
    catInsecticides: 'పురుగు మందులు (Insecticides)',
    catBioFertilizer: 'జీవ ఎరువులు (Bio-Fertilizer)',
    catOrganic: 'సేంద్రీయ ఉత్పత్తులు (Organic)',
    targetProblems: 'నివారించే సమస్యలు:',
    packOptions: 'లభించే ప్యాక్‌లు:',
    verifyAuthenticity: 'అసలైనదా తనిఖీ చేయండి',

    weatherTitle: 'వ్యవసాయ వాతావరణ సలహా',
    weatherSubtitle: 'సూక్ష్మ వాతావరణం, మందుల పిచికారీ సమయం మరియు నీటి తడుల ప్రణాళిక',
    currentMicroclimate: 'ప్రస్తుత వాతావరణం',
    updateLocation: 'ప్రదేశాన్ని మార్చండి',
    enterDistrictPlaceholder: 'జిల్లా లేదా నగరం పేరు రాయండి...',
    humidity: 'గాలిలో తేమ శాతం',
    windSpeed: 'గాలి వేగం',
    rainChance: 'వర్షం కురిసే అవకాశం',
    uvIndex: 'ఎండ తీవ్రత (UV)',
    sprayingWindowSafe: 'పిచికారీ సమయం: అనుకూలం (ఈరోజు సురక్షితం)',
    sprayingWindowCaution: 'పిచికారీ సమయం: జాగ్రత్త అవసరం',
    sprayingAdviceSafe: 'గాలి వేగం 15 కి.మీ కంటే తక్కువగా ఉంది. ఉదయం 7:30 నుండి 10:30 లేదా సాయంత్రం 4:30 తర్వాత పిచికారీ చేయడం ఉత్తమం.',
    sprayingAdviceCaution: 'రాబోయే 24 గంటల్లో వర్షం కురిసే అవకాశం ఉంది. మందులు కొట్టుకుపోకుండా ఉండటానికి పిచికారీ వాయిదా వేయండి.',
    irrigationTitle: 'నీటి యాజమాన్య సలహా',
    irrigationAdvice: 'నేల తేమను బట్టి నీరు అందించండి. ఆరుతడి పద్ధతి ద్వారా వరిలో 25% నీటిని ఆదా చేయవచ్చు.',
    forecast5Day: 'రాబోయే 5 రోజుల వాతావరణ అంచనా',

    soilTitle: 'మట్టి ఆరోగ్యం మరియు పోషకాల యాజమాన్యం',
    soilSubtitle: 'భూసార పరీక్ష ఫలితాలు, ఆమ్ల/క్షార గుణాల సవరణ మరియు సేంద్రీయ పోషకాలు',
    enterSoilValues: 'భూసార పరీక్ష కార్డు వివరాలు నమోదు చేయండి',
    soilPhLabel: 'నేల pH విలువ (0 - 14)',
    organicCarbonLabel: 'సేంద్రీయ కర్బనం (Organic Carbon)',
    soilTextureLabel: 'పొలం నేల రకం',
    generateSoilBtn: 'భూసార సలహాను పొందండి (+50 🪙)',
    soilDiagnosisTitle: 'భూసార పరీక్ష విశ్లేషణ',
    phAssessment: 'pH స్థాయి పరిశీలన',
    organicCarbonAdvice: 'సేంద్రీయ కర్బనం & నేల జీవం',
    proceedToFertilizer: 'NPK ఎరువుల బస్తాల లెక్కింపునకు వెళ్లండి',

    mandiTitle: 'వ్యవసాయ మార్కెట్ ధరలు (APMC Mandi)',
    mandiSubtitle: 'సమీప మార్కెట్ యార్డుల ధరలను సరిపోల్చండి మరియు డేటా డౌన్‌లోడ్ చేసుకోండి',
    exportCsvBtn: 'డేటా డౌన్‌లోడ్ (CSV)',
    searchMandiPlaceholder: 'పంట పేరు లేదా మార్కెట్ యార్డ్ వెతకండి...',
    commodityCrop: 'పంట / దిగుబడి',
    marketYard: 'మార్కెట్ యార్డ్ (మండీ)',
    minRate: 'కనిష్ట ధర',
    maxRate: 'గరిష్ట ధర',
    avgRate: 'సగటు ధర (క్వింటాలుకు)',
    marketTrend: 'ధరల ధోరణి',
    showingRecords: 'పర్యవేక్షించబడుతున్న వ్యవసాయ మార్కెట్ల రికార్డులు',

    agentTitle: 'అగ్రిసాథి AI స్పెషలిస్ట్ ఏజెంట్లు',
    agentSubtitle: '',
    clearChat: 'చాట్ క్లియర్ చేయండి',
    chatPlaceholder: 'పంట తెగుళ్లు, ఎరువులు, వాతావరణం లేదా మార్కెట్ ధరల గురించి అడగండి...',
    send: 'పంపండి',
    suggestionsLabel: 'సూచనలు:',
    orchestrationLog: 'మల్టీ-ఏజెంట్ పనితీరు లాగ్',
    orchestrationSub: 'ప్రశ్నను ఏ ఏజెంట్ పరిష్కరిస్తుందో లైవ్ ట్రాకింగ్',
    academicAlignment: 'మల్టీ-ఏజెంట్ సిస్టమ్ ప్రాజెక్ట్ లక్ష్యాలు',

    shortsTitle: 'వ్యవసాయ రీల్స్ & షార్ట్స్ (Shorts)',
    watchReel: 'వీడియో చూడండి',
    claimReward: '+50 🪙 కాయిన్స్ పొందండి',
    claimed: 'చూసారు (+50 🪙 చేర్చబడ్డాయి)',
    takeaways: 'ముఖ్యమైన వ్యవసాయ సూచనలు',
    transcriptTitle: 'వీడియో ఆడియో వివరణ',
    nextVideo: 'తదుపరి రీల్ ❯',
    prevVideo: '❮ మునుపటి రీల్',
  },

  hi: {
    appName: 'एग्रीसाथी',
    subTitle: 'मल्टी-एजेंट एआई स्मार्ट कृषि',
    namaskar: 'नमस्कार',
    smartFarming: 'स्मार्ट कृषि',
    tagline: 'आपका खेत। आपका डेटा। आपकी बेहतर फसल।',
    overview: 'अवलोकन',
    cropDoctor: 'क्रॉप डॉक्टर',
    fertilizerAdvice: 'उर्वरक सलाह',
    verifyProducts: 'उत्पाद सत्यापन',
    agriProducts: 'कृषि स्टोर',
    weatherPlanner: 'मौसम योजना',
    soilNutrients: 'मृदा एवं खाद',
    mandiPrices: 'मंडी भाव',
    aiAgents: 'एआई एजेंट',
    myFarm: 'मेरा खेत',
    agriCoins: 'एग्री-कॉइन',
    askAgriSathi: 'एग्रीसाथी से पूछें',
    switchModeMobile: 'मोबाइल ऐप व्यू',
    switchModeDesktop: 'पोर्टल वर्कस्पेस',
    farmWorkspace: 'कृषि वर्कस्पेस',
    switchFarmer: 'किसान बदलें',
    listening: 'आपकी आवाज़ सुन रहे हैं...',
    speakNow: 'अपनी भाषा में प्रश्न बोलें...',
    coinsEarned: 'सिक्के अर्जित',

    heroTitle: 'नमस्कार',
    heroSub: 'स्मार्ट खेती करें। आत्मविश्वास के साथ फसल काटें।',
    heroDesc: 'पत्ती रोग निदान, उर्वरक की सटीक खुराक, स्थानीय मौसम चेतावनी और मंडी भाव एक ही सरल प्लेटफॉर्म पर पाएं।',
    diagnoseLeafBtn: 'पत्ती रोग की जांच करें',
    activeFarmBadge: 'सक्रिय खेत प्रोफाइल',
    localWeather: 'स्थानीय मौसम',
    registeredCrop: 'दर्ज फसल',
    mandiBenchmark: 'मंडी औसत भाव',
    tasksCompleted: 'पूर्ण कार्य',
    dailyChecks: 'दैनिक कृषि जांच',
    whatToDo: 'आप क्या करना चाहते हैं?',
    whatToDoSub: 'जरूरी कृषि टूल्स आपकी उंगलियों पर',
    dailyChecklist: 'दैनिक खेत चेकलिस्ट',
    dailyChecklistSub: 'दैनिक कृषि निरीक्षण कार्य पूरे करें',
    safetyDisclaimer: 'एग्रीसाथी एआई सुझाव निर्णय में सहायक हैं। कीटनाशक छिड़काव से पहले कृषि अधिकारी से सलाह लें।',
    videosForYou: 'आपके लिए उपयोगी वीडियो',
    videosForYouSub: 'खेती और सरकारी योजनाओं पर उपयोगी रील्स',
    seeAll: 'सभी देखें',

    check1Title: 'फसल की पत्तियां जांचें',
    check1Desc: 'फंगल धब्बे, पीलापन या कीटों को देखें।',
    check2Title: 'जड़ क्षेत्र में नमी जांचें',
    check2Desc: 'सिंचाई से पहले मिट्टी की नमी देखें।',
    check3Title: 'मौसम व छिड़काव समय देखें',
    check3Desc: 'हवा की गति और बारिश देखकर छिड़काव करें।',
    check4Title: 'मंडी भाव की तुलना करें',
    check4Desc: 'फसल कटाई से पहले वर्तमान मंडी भाव देखें।',

    cropDoctorTitle: 'क्रॉप डॉक्टर एआई (रोग निदान)',
    cropDoctorSubtitle: 'प्लांटविलेज डीप लर्निंग + मल्टीमॉडल विजन विश्लेषण',
    targetCrop: 'फसल चुनें',
    observedSymptoms: 'दिख रहे लक्षण',
    symptomsPlaceholder: 'उदा. भूरे गोल छल्लेदार धब्बे, पीला घेरा, मुरझाना...',
    dropPhoto: 'पत्ती का फोटो यहां डालें या चुनें',
    uploadLeafBtn: 'पत्ती का फोटो अपलोड करें',
    changePhoto: 'फोटो बदलें',
    sampleSpecimens: 'नमूना पत्तियां',
    tomatoLeaf: 'टमाटर की पत्ती',
    earlyBlight: 'अगेती झुलसा (Early Blight)',
    paddyLeaf: 'धान की पत्ती',
    brownSpot: 'भूरा धब्बा (Brown Spot)',
    scanBtn: 'रोग का निदान करें (+100 🪙)',
    scanning: 'एआई द्वारा जांच जारी है...',
    audioReadAloud: 'किसानों के लिए बोलकर सुनाएं',
    listenVoice: '🔊 आवाज़ सुनें',
    stopVoice: '⏹ आवाज़ रोकें',
    observedPathology: 'पाए गए रोग लक्षण',
    organicRemedyTitle: 'जैविक नियंत्रण (Organic Remedy)',
    chemicalSprayTitle: 'स्वीकृत रासायनिक छिड़काव (Chemical Spray)',
    preventionTitle: 'खेत में रोकथाम के उपाय',
    agronomistNote: 'कृषि वैज्ञानिक सलाह:',
    noDiagnosisYet: 'अभी तक कोई निदान नहीं किया गया',
    noDiagnosisSub: 'ऊपर दिए गए नमूने चुनें या अपनी पत्ती का फोटो अपलोड करके "रोग का निदान करें" पर क्लिक करें।',

    fertilizerTitle: 'उर्वरक एवं पोषक तत्व सलाह',
    fertilizerSub: 'सटीक बोरी गणना और चरणबद्ध खाद कैलेंडर',
    landAcres: 'जमीन (एकड़)',
    soilType: 'मिट्टी का प्रकार',
    soilPh: 'मिट्टी का pH',
    nitrogenStatus: 'नाइट्रोजन स्तर',
    growthStage: 'फसल की अवस्था',
    calculateDoseBtn: 'खाद की खुराक निकालें (+75 🪙)',
    calculating: 'गणना की जा रही है...',
    fertilizerDosesFor: 'खाद की सिफारिशें:',
    targetArea: 'कुल रकबा',
    downloadPlan: 'प्लान डाउनलोड करें',
    ureaTitle: 'यूरिया (46% N)',
    dapTitle: 'डी.ए.पी (18-46-0)',
    mopTitle: 'पोटाश (MOP)',
    fymTitle: 'गोबर खाद / कम्पोस्ट',
    bags50kg: '50 किलो की बोरियां',
    soilHealthGuidance: 'मृदा स्वास्थ्य मार्गदर्शन:',
    splitScheduleTitle: 'किस्तों में खाद देने का शेड्यूल',

    verifyTitle: 'कृषि उत्पाद सत्यापन',
    verifySubtitle: 'असली उत्पाद जांचने के लिए क्यूआर कोड या बैच नंबर डालें',
    scanQrPrompt: 'उत्पाद के क्यूआर कोड पर कैमरा रखें या नीचे कोड लिखें',
    sampleBatchCodes: 'सत्यापित बैच कोड नमूने',
    enterBatchLabel: 'बैच कोड / होलोग्राम नंबर',
    batchPlaceholder: 'उदा. BYR-2026-NTV-8819',
    verifyAuthenticityBtn: 'उत्पाद की असलियत जांचें (+50 🪙)',
    verifying: 'सरकारी डेटाबेस में जांच कर रहे हैं...',
    genuineBatch: '100% असली प्रमाणित बैच',
    warningBatch: 'सत्यापन चेतावनी: बैच नहीं मिला',
    activeCompound: 'सक्रिय रासायनिक घटक:',
    recommendedDosage: 'सिफारिश की गई खुराक:',

    storeTitle: 'कृषि स्टोर एवं उत्पाद सूची',
    storeSubtitle: 'आधिकारिक खुराक, रसायनों के नाम और प्रमाणित बैच',
    searchProductsPlaceholder: 'उत्पाद, कीट या दवाइयां खोजें...',
    catAll: 'सभी',
    catFungicides: 'फफूंदनाशक (Fungicides)',
    catInsecticides: 'कीटनाशक (Insecticides)',
    catBioFertilizer: 'जैव उर्वरक (Bio-Fertilizer)',
    catOrganic: 'जैविक उत्पाद (Organic)',
    targetProblems: 'नियंत्रित रोग व कीट:',
    packOptions: 'पैकिंग विकल्प:',
    verifyAuthenticity: 'सत्यापित करें',

    weatherTitle: 'कृषि मौसम परामर्श',
    weatherSubtitle: 'स्थानीय मौसम, दवा छिड़काव समय और सिंचाई योजना',
    currentMicroclimate: 'वर्तमान मौसम स्थिति',
    updateLocation: 'स्थान बदलें',
    enterDistrictPlaceholder: 'जिले का नाम दर्ज करें...',
    humidity: 'हवा में नमी',
    windSpeed: 'हवा की गति',
    rainChance: 'बारिश की संभावना',
    uvIndex: 'धूप का स्तर (UV)',
    sprayingWindowSafe: 'छिड़काव समय: खुला (आज सुरक्षित है)',
    sprayingWindowCaution: 'छिड़काव समय: सावधानी बरतें',
    sprayingAdviceSafe: 'हवा की गति 15 किमी/घंटा से कम है। सुबह 7:30 से 10:30 या शाम 4:30 के बाद छिड़काव करना सर्वोत्तम है।',
    sprayingAdviceCaution: 'अगले 24 घंटों में बारिश की संभावना है। दवा धुलने से बचाने के लिए छिड़काव टालें।',
    irrigationTitle: 'सिंचाई एवं जल प्रबंधन',
    irrigationAdvice: 'मिट्टी की नमी अनुसार सिंचाई करें। धान में एकांतर जल भराव से 25% पानी की बचत होती है।',
    forecast5Day: '5-दिवसीय मौसम पूर्वानुमान',

    soilTitle: 'मृदा स्वास्थ्य एवं पोषक तत्व प्रबंधन',
    soilSubtitle: 'मृदा जांच परिणाम, अम्लता/क्षारीयता सुधार और जैविक खाद',
    enterSoilValues: 'सॉइल हेल्थ कार्ड के मान भरें',
    soilPhLabel: 'मिट्टी का pH स्तर (0 - 14)',
    organicCarbonLabel: 'जैविक कार्बन स्तर',
    soilTextureLabel: 'खेत की मिट्टी का प्रकार',
    generateSoilBtn: 'मृदा सलाह प्राप्त करें (+50 🪙)',
    soilDiagnosisTitle: 'मृदा स्वास्थ्य निदान',
    phAssessment: 'pH मान मूल्यांकन',
    organicCarbonAdvice: 'जैविक कार्बन और सूक्ष्मजीव',
    proceedToFertilizer: 'NPK खाद कैलकुलेटर पर जाएं',

    mandiTitle: 'कृषि मंडी भाव (APMC Mandi)',
    mandiSubtitle: 'समीपवर्ती मंडियों के भाव देखें और सीएसवी डेटा डाउनलोड करें',
    exportCsvBtn: 'डेटा डाउनलोड (CSV)',
    searchMandiPlaceholder: 'फसल या मंडी का नाम खोजें...',
    commodityCrop: 'फसल / जिस',
    marketYard: 'मंडी यार्ड',
    minRate: 'न्यूनतम भाव',
    maxRate: 'अधिकतम भाव',
    avgRate: 'औसत भाव (₹/क्विंटल)',
    marketTrend: 'भाव का रुझान',
    showingRecords: 'निगरानी की जा रही मंडियों के रिकॉर्ड',

    agentTitle: 'एग्रीसाथी एआई विशेषज्ञ एजेंट',
    agentSubtitle: '',
    clearChat: 'बातचीत साफ़ करें',
    chatPlaceholder: 'फसल रोग, खाद, मौसम या मंडी भाव के बारे में पूछें...',
    send: 'भेजें',
    suggestionsLabel: 'सुझाव:',
    orchestrationLog: 'मल्टी-एजेंट गतिविधि लॉग',
    orchestrationSub: 'सवाल किस विशेषज्ञ एजेंट ने हल किया',
    academicAlignment: 'मल्टी-एजेंट सिस्टम प्रोजेक्ट लक्ष्य',

    shortsTitle: 'कृषि वीडियो रील्स एवं शॉर्ट्स',
    watchReel: 'वीडियो देखें',
    claimReward: '+50 🪙 सिक्के लें',
    claimed: 'देखा गया (+50 🪙 जुड़े)',
    takeaways: 'मुख्य कृषि सीख',
    transcriptTitle: 'ऑडियो विवरण',
    nextVideo: 'अगला वीडियो ❯',
    prevVideo: '❮ पिछला वीडियो',
  },

  kn: {
    appName: 'ಅಗ್ರಿಸಾಥಿ',
    subTitle: 'ಮಲ್ಟಿ-ಏಜೆಂಟ್ AI ಸ್ಮಾರ್ಟ್ ಕೃಷಿ',
    namaskar: 'ನಮಸ್ಕಾರ',
    smartFarming: 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ',
    tagline: 'ನಿಮ್ಮ ಹೊಲ. ನಿಮ್ಮ ಡೇಟಾ. ನಿಮ್ಮ ಉತ್ತಮ ಇಳುವರಿ.',
    overview: 'ಅವಲೋಕನ',
    cropDoctor: 'ಕ್ರಾಪ್ ಡಾಕ್ಟರ್',
    fertilizerAdvice: 'ಗೊಬ್ಬರ ಸಲಹೆ',
    verifyProducts: 'ಉತ್ಪನ್ನ ಪರಿಶೀಲನೆ',
    agriProducts: 'ಕೃಷಿ ಮಳಿಗೆ',
    weatherPlanner: 'ಹವಾಮಾನ ಯೋಜನೆ',
    soilNutrients: 'ಮಣ್ಣು ಮತ್ತು ಪೋಷಕಾಂಶಗಳು',
    mandiPrices: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ',
    aiAgents: 'AI ಸಹಾಯಕರು',
    myFarm: 'ನನ್ನ ಜಮೀನು',
    agriCoins: 'ಅಗ್ರಿ ಕಾಯಿನ್ಸ್',
    askAgriSathi: 'ಅಗ್ರಿಸಾಥಿ ಕೇಳಿ',
    switchModeMobile: 'ಮೊಬೈಲ್ ಆ್ಯಪ್ ವೀಕ್ಷಣೆ',
    switchModeDesktop: 'ಪೋರ್ಟಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    farmWorkspace: 'ಕೃಷಿ ಕಾರ್ಯಸ್ಥಳ',
    switchFarmer: 'ರೈತರನ್ನು ಬದಲಾಯಿಸಿ',
    listening: 'ಧ್ವನಿ ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ...',
    speakNow: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ...',
    coinsEarned: 'ಕಾಯಿನ್ಸ್ ಗಳಿಸಲಾಗಿದೆ',

    heroTitle: 'ನಮಸ್ಕಾರ',
    heroSub: 'ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಬೆಳೆಯಿರಿ. ವಿಶ್ವಾಸದಿಂದ ಕೊಯ್ಲು ಮಾಡಿ.',
    heroDesc: 'ಎಲೆ ರೋಗ ಪರೀಕ್ಷೆ, ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣ, ಸ್ಥಳೀಯ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಒಂದೇ ಕಡೆ ಪಡೆಯಿರಿ.',
    diagnoseLeafBtn: 'ಎಲೆ ರೋಗ ಪರೀಕ್ಷಿಸಿ',
    activeFarmBadge: 'ಪ್ರಸ್ತುತ ಬೆಳೆ ವಿವರ',
    localWeather: 'ಸ್ಥಳೀಯ ಹವಾಮಾನ',
    registeredCrop: 'ನೋಂದಾಯಿತ ಬೆಳೆ',
    mandiBenchmark: 'ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿ ಬೆಲೆ',
    tasksCompleted: 'ಪೂರ್ಣಗೊಂಡ ಕೆಲಸಗಳು',
    dailyChecks: 'ದೈನಂದಿನ ಕೃಷಿ ಪರಿಶೀಲನೆ',
    whatToDo: 'ನೀವು ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?',
    whatToDoSub: 'ಅಗತ್ಯ ಕೃಷಿ ಡಿಜಿಟಲ್ ಪರಿಕರಗಳು ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ',
    dailyChecklist: 'ದೈನಂದಿನ ಕೃಷಿ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
    dailyChecklistSub: 'ದೈನಂದಿನ ಕೃಷಿ ಪರಿಶೀಲನಾ ಕಾರ್ಯಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    safetyDisclaimer: 'ಅಗ್ರಿಸಾಥಿ AI ಸಲಹೆಗಳು ನಿರ್ಧಾರಕ್ಕೆ ಸಹಕಾರಿ. ಕೀಟನಾಶಕ ಸಿಂಪಡಿಸುವ ಮುನ್ನ ಕೃಷಿ ಅಧಿಕಾರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    videosForYou: 'ನಿಮಗಾಗಿ ಉಪಯುಕ್ತ ವೀಡಿಯೊಗಳು',
    videosForYouSub: 'ಬೆಳೆ ನಿರ್ವಹಣೆ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಕುರಿತು ರೀಲ್ಸ್',
    seeAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',

    check1Title: 'ಬೆಳೆಯ ಎಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    check1Desc: 'ಶಿಲೀಂಧ್ರ ಕಲೆಗಳು, ಹಳದಿ ಬಣ್ಣ ಅಥವಾ ಕೀಟಗಳನ್ನು ಗಮನಿಸಿ.',
    check2Title: 'ಬೇರಿನ ಭಾಗದಲ್ಲಿ ತೇವಾಂಶ ಪರೀಕ್ಷಿಸಿ',
    check2Desc: 'ನೀರು ಹಾಯಿಸುವ ಮುನ್ನ ಮಣ್ಣಿನ ತೇವಾಂಶ ನೋಡಿ.',
    check3Title: 'ಹವಾಮಾನ ಮತ್ತು ಸಿಂಪಡಣೆ ಸಮಯ ನೋಡಿ',
    check3Desc: 'ಗಾಳಿ ಮತ್ತು ಮಳೆಯ ಮುನ್ಸೂಚನೆ ಪರಿಶೀಲಿಸಿ.',
    check4Title: 'ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಹೋಲಿಸಿ',
    check4Desc: 'ಕೊಯ್ಲಿಗೆ ಮುನ್ನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.',

    cropDoctorTitle: 'ಕ್ರಾಪ್ ಡಾಕ್ಟರ್ AI (ರೋಗ ಪರೀಕ್ಷೆ)',
    cropDoctorSubtitle: 'ಪ್ಲಾಂಟ್ ವಿಲೇಜ್ ಡೀಪ್ ಲರ್ನಿಂಗ್ + ಮಲ್ಟಿಮೋಡಲ್ ವಿಷನ್ ವಿಶ್ಲೇಷಣೆ',
    targetCrop: 'ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ',
    observedSymptoms: 'ಕಂಡುಬಂದ ಲಕ್ಷಣಗಳು',
    symptomsPlaceholder: 'ಉದಾ: ಕಂದು ಬಣ್ಣದ ವೃತ್ತಾಕಾರದ ಕಲೆಗಳು, ಎಲೆ ಹಳದಿಯಾಗುವುದು...',
    dropPhoto: 'ಎಲೆಯ ಫೋಟೋ ಇಲ್ಲಿ ಹಾಕಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ',
    uploadLeafBtn: 'ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    changePhoto: 'ಫೋಟೋ ಬದಲಾಯಿಸಿ',
    sampleSpecimens: 'ಮಾದರಿ ಎಲೆಗಳು',
    tomatoLeaf: 'ಟೊಮ್ಯಾಟೊ ಎಲೆ',
    earlyBlight: 'ಮುಂಚಿನ ರೋಗ (Early Blight)',
    paddyLeaf: 'ಭತ್ತದ ಎಲೆ',
    brownSpot: 'ಕಂದು ಕಲೆ ರೋಗ',
    scanBtn: 'ರೋಗ ಪರೀಕ್ಷಿಸಿ (+100 🪙)',
    scanning: 'AI ಮೂಲಕ ಪರೀಕ್ಷಿಸಲಾಗುತ್ತಿದೆ...',
    audioReadAloud: 'ರೈತರಿಗಾಗಿ ಧ್ವನಿ ಮೂಲಕ ಓದಿ ಹೇಳಿ',
    listenVoice: '🔊 ಧ್ವನಿ ಕೇಳಿ',
    stopVoice: '⏹ ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
    observedPathology: 'ಕಂಡುಬಂದ ರೋಗ ಲಕ್ಷಣಗಳು',
    organicRemedyTitle: 'ಸಾವಯವ ಪರಿಹಾರ (Organic Remedy)',
    chemicalSprayTitle: 'ಶಿಫಾರಸು ಮಾಡಿದ ರಾಸಾಯನಿಕ ಸಿಂಪಡಣೆ (Chemical Spray)',
    preventionTitle: 'ಹೊಲದಲ್ಲಿ ಮುನ್ನೆಚ್ಚರಿಕೆ ಕ್ರಮಗಳು',
    agronomistNote: 'ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆ:',
    noDiagnosisYet: 'ಇನ್ನೂ ಪರೀಕ್ಷೆ ಮಾಡಲಾಗಿಲ್ಲ',
    noDiagnosisSub: 'ಮೇಲಿನ ಮಾದರಿಯನ್ನು ಆರಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಹೊಲದ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ "ರೋಗ ಪರೀಕ್ಷಿಸಿ" ಕ್ಲಿಕ್ ಮಾಡಿ.',

    fertilizerTitle: 'ಗೊಬ್ಬರ ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಸಲಹೆ',
    fertilizerSub: 'ನಿಖರವಾದ ಚೀಲಗಳ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ಹಂತ ಹಂತದ ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿ',
    landAcres: 'ಜಮೀನು (ಎಕರೆ)',
    soilType: 'ಮಣ್ಣಿನ ವಿಧ',
    soilPh: 'ಮಣ್ಣಿನ pH',
    nitrogenStatus: 'ಸಾರಜನಕ ಮಟ್ಟ',
    growthStage: 'ಬೆಳೆಯ ಹಂತ',
    calculateDoseBtn: 'ಗೊಬ್ಬರದ ಪ್ರಮಾಣ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ (+75 🪙)',
    calculating: 'ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತಿದೆ...',
    fertilizerDosesFor: 'ಶಿಫಾರಸು ಮಾಡಿದ ಗೊಬ್ಬರ:',
    targetArea: 'ಒಟ್ಟು ವಿಸ್ತೀರ್ಣ',
    downloadPlan: 'ಯೋಜನೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    ureaTitle: 'ಯೂರಿಯಾ (46% N)',
    dapTitle: 'ಡಿ.ಎ.ಪಿ (18-46-0)',
    mopTitle: 'ಪೊಟ್ಯಾಶ್ (MOP)',
    fymTitle: 'ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ / ಕಾಂಪೋಸ್ಟ್',
    bags50kg: '50 ಕೆಜಿ ಚೀಲಗಳು',
    soilHealthGuidance: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ:',
    splitScheduleTitle: 'ಹಂತ ಹಂತದ ಗೊಬ್ಬರ ವಿಭಜನೆ',

    verifyTitle: 'ಕೃಷಿ ಉತ್ಪನ್ನ ಪರಿಶೀಲನೆ',
    verifySubtitle: 'ನಕಲಿ ಔಷಧಗಳನ್ನು ತಡೆಯಲು QR ಕೋಡ್ ಅಥವಾ ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    scanQrPrompt: 'ಉತ್ಪನ್ನದ QR ಕೋಡ್ ತೋರಿಸಿ ಅಥವಾ ಕೆಳಗೆ ಕೋಡ್ ಬರೆಯಿರಿ',
    sampleBatchCodes: 'ಮಾದರಿ ಪ್ರಮಾಣೀಕೃತ ಬ್ಯಾಚ್ ಕೋಡ್‌ಗಳು',
    enterBatchLabel: 'ಬ್ಯಾಚ್ ಕೋಡ್ / ಹೋಲೋಗ್ರಾಮ್ ಸಂಖ್ಯೆ',
    batchPlaceholder: 'ಉದಾ: BYR-2026-NTV-8819',
    verifyAuthenticityBtn: 'ಉತ್ಪನ್ನ ನೈಜತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ (+50 🪙)',
    verifying: 'ಸರ್ಕಾರಿ ನೋಂದಣಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    genuineBatch: '100% ಅಸಲಿ ಪ್ರಮಾಣೀಕೃತ ಬ್ಯಾಚ್',
    warningBatch: 'ಪರಿಶೀಲನೆ ಎಚ್ಚರಿಕೆ: ಬ್ಯಾಚ್ ಕಂಡುಬಂದಿಲ್ಲ',
    activeCompound: 'ಸಕ್ರಿಯ ರಾಸಾಯನಿಕ ಅಂಶ:',
    recommendedDosage: 'ಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರಮಾಣ:',

    storeTitle: 'ಕೃಷಿ ಮಳಿಗೆ ಮತ್ತು ಉತ್ಪನ್ನ ಪಟ್ಟಿ',
    storeSubtitle: 'ಅಧಿಕೃತ ಪ್ರಮಾಣಗಳು, ರಾಸಾಯನಿಕ ಹೆಸರುಗಳು ಮತ್ತು ಬ್ಯಾಚ್‌ಗಳು',
    searchProductsPlaceholder: 'ಉತ್ಪನ್ನ, ರೋಗ ಅಥವಾ ಕೀಟನಾಶಕಗಳನ್ನು ಹುಡುಕಿ...',
    catAll: 'ಎಲ್ಲವೂ',
    catFungicides: 'ಶಿಲೀಂಧ್ರನಾಶಕ (Fungicides)',
    catInsecticides: 'ಕೀಟನಾಶಕ (Insecticides)',
    catBioFertilizer: 'ಜೈವಿಕ ಗೊಬ್ಬರ (Bio-Fertilizer)',
    catOrganic: 'ಸಾವಯವ ಉತ್ಪನ್ನಗಳು (Organic)',
    targetProblems: 'ಗುರಿ ಸಮಸ್ಯೆಗಳು:',
    packOptions: 'ಪ್ಯಾಕಿಂಗ್ ಆಯ್ಕೆಗಳು:',
    verifyAuthenticity: 'ನೈಜತೆ ಪರಿಶೀಲಿಸಿ',

    weatherTitle: 'ಕೃಷಿ ಹವಾಮಾನ ಸಲಹೆ',
    weatherSubtitle: 'ಸ್ಥಳೀಯ ಹವಾಮಾನ, ಸಿಂಪಡಣೆ ಸಮಯ ಮತ್ತು ನೀರಾವರಿ ಯೋಜನೆ',
    currentMicroclimate: 'ಪ್ರಸ್ತುತ ಹವಾಮಾನ',
    updateLocation: 'ಸ್ಥಳ ಬದಲಾಯಿಸಿ',
    enterDistrictPlaceholder: 'ಜಿಲ್ಲೆ ಅಥವಾ ಊರಿನ ಹೆಸರು ಬರೆಯಿರಿ...',
    humidity: 'ಗಾಳಿಯ ತೇವಾಂಶ',
    windSpeed: 'ಗಾಳಿಯ ವೇಗ',
    rainChance: 'ಮಳೆಯ ಸಾಧ್ಯತೆ',
    uvIndex: 'ಬಿಸಿಲಿನ ತೀವ್ರತೆ (UV)',
    sprayingWindowSafe: 'ಸಿಂಪಡಣೆ ಸಮಯ: ಮುಕ್ತವಾಗಿದೆ (ಇಂದು ಸುರಕ್ಷಿತ)',
    sprayingWindowCaution: 'ಸಿಂಪಡಣೆ ಸಮಯ: ಎಚ್ಚರಿಕೆ ವಹಿಸಿ',
    sprayingAdviceSafe: 'ಗಾಳಿಯ ವೇಗ ಗಂಟೆಗೆ 15 ಕಿಮೀಗಿಂತ ಕಡಿಮೆ ಇದೆ. ಬೆಳಿಗ್ಗೆ 7:30 ರಿಂದ 10:30 ಅಥವಾ ಸಂಜೆ 4:30 ರ ನಂತರ ಸಿಂಪಡಿಸುವುದು ಉತ್ತಮ.',
    sprayingAdviceCaution: 'ಮುಂದಿನ 24 ಗಂಟೆಗಳಲ್ಲಿ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆ ಇದೆ. ಔಷಧ ಕೊಚ್ಚಿಹೋಗದಂತೆ ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಿ.',
    irrigationTitle: 'ನೀರಾವರಿ ಸಲಹೆ',
    irrigationAdvice: 'ಮಣ್ಣಿನ ತೇವಾಂಶಕ್ಕೆ ಅನುಗುಣವಾಗಿ ನೀರು ಹಾಯಿಸಿ. ಭತ್ತದಲ್ಲಿ ಪರ್ಯಾಯ ನೀರಾವರಿಯಿಂದ 25% ನೀರು ಉಳಿತಾಯವಾಗುತ್ತದೆ.',
    forecast5Day: 'ಮುಂದಿನ 5 ದಿನಗಳ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ',

    soilTitle: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ',
    soilSubtitle: 'ಮಣ್ಣು ಪರೀಕ್ಷೆ ಫಲಿತಾಂಶ, ಆಮ್ಲ/ಕ್ಷಾರ ಸರಿಪಡಿಸುವಿಕೆ ಮತ್ತು ಪೋಷಕಾಂಶಗಳು',
    enterSoilValues: 'ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಮೌಲ್ಯಗಳನ್ನು ನಮೂದಿಸಿ',
    soilPhLabel: 'ಮಣ್ಣಿನ pH ಮಟ್ಟ (0 - 14)',
    organicCarbonLabel: 'ಸಾವಯವ ಇಂಗಾಲದ ಮಟ್ಟ',
    soilTextureLabel: 'ಹೊಲದ ಮಣ್ಣಿನ ವಿಧ',
    generateSoilBtn: 'ಮಣ್ಣಿನ ಸಲಹೆ ಪಡೆಯಿರಿ (+50 🪙)',
    soilDiagnosisTitle: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ',
    phAssessment: 'pH ಮೌಲ್ಯಮಾಪನ',
    organicCarbonAdvice: 'ಸಾವಯವ ಇಂಗಾಲ ಮತ್ತು ಸೂಕ್ಷ್ಮಾಣುಜೀವಿಗಳು',
    proceedToFertilizer: 'NPK ಗೊಬ್ಬರ ಲೆಕ್ಕಾಚಾರಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ',

    mandiTitle: 'ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು (APMC Mandi)',
    mandiSubtitle: 'ಸಮೀಪದ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಡೇಟಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    exportCsvBtn: 'ಡೇಟಾ ಡೌನ್‌ಲೋಡ್ (CSV)',
    searchMandiPlaceholder: 'ಬೆಳೆ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ಹೆಸರನ್ನು ಹುಡುಕಿ...',
    commodityCrop: 'ಬೆಳೆ / ಉತ್ಪನ್ನ',
    marketYard: 'ಮಾರುಕಟ್ಟೆ ಯಾರ್ಡ್',
    minRate: 'ಕನಿಷ್ಠ ಬೆಲೆ',
    maxRate: 'ಗರಿಷ್ಠ ಬೆಲೆ',
    avgRate: 'ಸರಾಸರಿ ಬೆಲೆ (ಕ್ವಿಂಟಾಲ್‌ಗೆ)',
    marketTrend: 'ಬೆಲೆ ಪ್ರವೃತ್ತಿ',
    showingRecords: 'ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ APMC ಮಾರುಕಟ್ಟೆಗಳ ದಾಖಲೆಗಳು',

    agentTitle: 'ಅಗ್ರಿಸಾಥಿ AI ತಜ್ಞ ಸಹಾಯಕರು',
    agentSubtitle: '',
    clearChat: 'ಸಂಭಾಷಣೆ ಅಳಿಸಿ',
    chatPlaceholder: 'ಬೆಳೆ ರೋಗಗಳು, ಗೊಬ್ಬರ, ಹವಾಮಾನ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ದರಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
    send: 'ಕಳುಹಿಸಿ',
    suggestionsLabel: 'ಸಲಹೆಗಳು:',
    orchestrationLog: 'ಮಲ್ಟಿ-ಏಜೆಂಟ್ ಲಾಗ್',
    orchestrationSub: 'ಯಾವ ತಜ್ಞ ಏಜೆಂಟ್ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿದ್ದಾರೆ',
    academicAlignment: 'ಮಲ್ಟಿ-ಏಜೆಂಟ್ ಸಿಸ್ಟಮ್ ಪ್ರಾಜೆಕ್ಟ್ ವಿವರಗಳು',

    shortsTitle: 'ಕೃಷಿ ವೀಡಿಯೊ ರೀಲ್ಸ್ ಮತ್ತು ಶಾರ್ಟ್ಸ್',
    watchReel: 'ವೀಡಿಯೊ ವೀಕ್ಷಿಸಿ',
    claimReward: '+50 🪙 ಕಾಯಿನ್ಸ್ ಪಡೆಯಿರಿ',
    claimed: 'ವೀಕ್ಷಿಸಲಾಗಿದೆ (+50 🪙 ಸೇರಿಸಲಾಗಿದೆ)',
    takeaways: 'ಮುಖ್ಯ ಕೃಷಿ ಸಲಹೆಗಳು',
    transcriptTitle: 'ಆಡಿಯೋ ವಿವರಣೆ',
    nextVideo: 'ಮುಂದಿನ ವೀಡಿಯೊ ❯',
    prevVideo: '❮ ಹಿಂದಿನ ವೀಡಿಯೊ',
  },
};
