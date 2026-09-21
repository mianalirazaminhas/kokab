/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PillarData, CapacityItem } from './types';

export const PILLARS_DATA: PillarData[] = [
  {
    id: "hse",
    number: "01",
    name: "Health, Safety & Environment",
    arabicName: "الصحة والسلامة والبيئة",
    description: "We recruited dedicated professionals to ensure safe work practices. Initiated ISO 14001 (EMS) & 45001 (Health & Safety) certifications with outsource training fully underway to establish global benchmark compliance.",
    highlights: [
      "Defined Emergency Response Guidelines",
      "Incident Investigation & Prevention",
      "Sufficiently Structured Emergency Exits",
      "Solid & Liquid Waste Lifecycle Management",
      "Personal Hygiene Checkpoints & Pest Control"
    ],
    visualType: "list"
  },
  {
    id: "production",
    number: "02",
    name: "Production Section",
    arabicName: "قسم الإنتاج",
    description: "Our state-of-the-art manufacturing floor is operated by dynamic, highly experienced cosmetics formulation and processing experts to deliver premium quality results at scale.",
    highlights: [
      "Expert-supervised chemical formulations",
      "High-output automated processing lines",
      "Temperature-regulated pristine environment",
      "Dust and micro-impurity free air locks"
    ],
    visualType: "grid"
  },
  {
    id: "scm",
    number: "03",
    name: "Supply Chain Management",
    arabicName: "إدارة سلسلة الإمداد",
    description: "Seamlessly managing the entire supply chain from active material sourcing and formulation prep to packing, warehousing, and ultimate retail delivery. Minimizes overheads and maintains perfect delivery timelines.",
    highlights: [
      "Active sourcing optimization",
      "Lean packaging material coordination",
      "Real-time logistics fleet dispatching",
      "Supply disruption mitigation systems"
    ],
    visualType: "stats"
  },
  {
    id: "engineering",
    number: "04",
    name: "Engineering & Maintenance",
    arabicName: "الهندسة والصيانة",
    description: "Ensures the smooth uninterrupted operations of advanced robotic manufacturing facilities and equipment. Proactive scheduled maintenance, direct technical support, and electrical-mechanical safety frameworks.",
    highlights: [
      "Zero-downtime preventative scheduling",
      "Proactive calibrations and component analysis",
      "Energy efficient systems engineering",
      "Immediate troubleshooting taskforce"
    ],
    visualType: "blueprints"
  },
  {
    id: "qc",
    number: "05",
    name: "Quality Control Lab",
    arabicName: "مختبر مراقبة الجودة",
    description: "Our fully equipped lab supervises precision validation protocols throughout the manufacturing pipeline (raw ingredients to shelf storage). Uses advanced testing systems to ensure impeccable physical and chemical consistency.",
    highlights: [
      "Digital Viscometers for texture",
      "Digital Density Meters for gravity",
      "Benchtop p(H) Meters for skin safety",
      "TDS Meters & Distillation apparatuses",
      "Melting Point apparatus & Tube Leakage tester"
    ],
    visualType: "lab"
  },
  {
    id: "hr",
    number: "06",
    name: "HR / Administration",
    arabicName: "الموارد البشرية والإدارة",
    description: "Manages professional recruitment pipelines, administrative protocols, and internal operations. Focuses on worker-first workplace safety, continuous growth training, and optimizing logistics for a smooth, high-performing corporate workspace.",
    highlights: [
      "Proactive recruitment of specialized personnel",
      "Dynamic team onboarding & legal compliance",
      "Safe and collaborative workplace culture",
      "Office logistics & operational management"
    ],
    visualType: "admin"
  },
  {
    id: "qa",
    number: "07",
    name: "Quality Assurance",
    arabicName: "توكيد الجودة",
    description: "Dedicated to testing raw blends, structural pack-ins, and validating final products to exceed premium market standards and complete global regulatory guidelines.",
    highlights: [
      "Rigorous random batch audits",
      "Standard operating procedures (SOP) control",
      "Defect isolation and reporting",
      "Continuous optimization feedback loop"
    ],
    visualType: "shield"
  },
  {
    id: "audit",
    number: "08",
    name: "Internal Audit & Accounts",
    arabicName: "التدقيق الداخلي والحسابات",
    description: "Guarantees accuracy of corporate and financial books, legal tax compliance, and robust cost governance. Drives data-centric insights for management decisions, mitigating risk factors while sustaining financial viability.",
    highlights: [
      "Rigorous control audits",
      "Cost management & budgeting reviews",
      "Direct tax compliance reporting",
      "Transparent bookkeeping & cashflow projections"
    ],
    visualType: "finance"
  }
];

export const COSMETIC_CATEGORIES = [
  {
    title: "Body Care",
    arabic: "العناية بالجسم",
    desc: "Nourishing lotions, creams and protective skin solutions.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    icon: "Sparkles"
  },
  {
    title: "Face Care",
    arabic: "العناية بالوجه",
    desc: "Facial cleansers, rich hydrator formulas, and premium ingredients.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    icon: "Flower"
  },
  {
    title: "Skin Whitening",
    arabic: "تفتيح البشرة",
    desc: "Clarifying serums and brightening treatments.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    icon: "Sun"
  },
  {
    title: "Sun Care",
    arabic: "العناية بالشمس",
    desc: "Water-resistant, non-greasy sunblocks with high UV protection.",
    image: "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80&w=600",
    icon: "ShieldAlert"
  },
  {
    title: "Color Cosmetics",
    arabic: "مستحضرات التجميل الملونة",
    desc: "Sleek eyeshadow palettes, bold lipsticks, and smooth liquid foundations.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
    icon: "Palette"
  },
  {
    title: "Men Care",
    arabic: "العناية بالرجل",
    desc: "Pragmatic grooming, refreshing washes, and active daily formulations.",
    image: "https://images.unsplash.com/photo-1626015759016-7484b4efc9d1?auto=format&fit=crop&q=80&w=600",
    icon: "UserCheck"
  },
  {
    title: "Hair Care",
    arabic: "العناية بالشعر",
    desc: "Restorative oils, masks, protective and reinforcing serum treatments.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600",
    icon: "Scissors"
  },
  {
    title: "Baby Care",
    arabic: "العناية بالطفل",
    desc: "Ultra-gentle hypoallergenic products engineered for delicate skin.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&q=80&w=600",
    icon: "Baby"
  }
];

export const MANUFACTURING_SECTION: CapacityItem[] = [
  { id: 1, sn: 1, description: "Vacuum Emulsifying Mixer-500 Liter (Jacketed)", qty: 1, capacity: "500 Liter" },
  { id: 2, sn: 2, description: "Vacuum Emulsifying Mixer-300 Liter (Jacketed)", qty: 1, capacity: "300 Liter" },
  { id: 3, sn: 3, description: "Mixer 200 Liter", qty: 1, capacity: "200 Liter" },
  { id: 4, sn: 4, description: "Storage Vessel 500 Liter", qty: 2, capacity: "500 Liter" },
  { id: 5, sn: 5, description: "Vacuum Emulsifying Mixer 2000 Liter (Jacketed)", qty: 1, capacity: "2000 Liter", isUpcoming: true }
];

export const PACKING_SECTION: CapacityItem[] = [
  { id: 101, sn: 1, description: "Tube Filling Machines", qty: 1, capacity: "20-40 tubes/min" },
  { id: 102, sn: 2, description: "Unit Carton Shrink Wrapping Machines", qty: 3, capacity: "20 carton/min" },
  { id: 103, sn: 3, description: "Inkjet Printing Machines", qty: 2, capacity: "60 Pcs/min" },
  { id: 104, sn: 4, description: "8 Nozzle Bottle Filling Machine", qty: 1, capacity: "30 bottles/min" },
  { id: 105, sn: 5, description: "Piston Type Liquid Filling Machines (Bulk 4)", qty: 4, capacity: "20-40 bottles/min" },
  { id: 106, sn: 6, description: "Piston Type Liquid Filling Machines (Medium)", qty: 1, capacity: "36 bottles/min" },
  { id: 107, sn: 7, description: "Bottle Labeling Machine", qty: 1, capacity: "20 bottles/min" },
  { id: 108, sn: 8, description: "Piston Type Liquid Filling Machines (Single)", qty: 1, capacity: "30 bottles/min" },
  { id: 109, sn: 9, description: "Piston Type Liquid Filling Machines (High Cap)", qty: 4, capacity: "20-40 bottles/min" },
  { id: 110, sn: 10, description: "Tube Filling Machines (Automated)", qty: 1, capacity: "20-40 tubes/minute", isUpcoming: true }
];

export const WAREHOUSE_HIGHLIGHTS = [
  "We have about 5000 pallets capacity in our state-of-the-art warehouse.",
  "Separate storage facility specifically isolated for temperature sensitive raw materials.",
  "Raw Material, Packing Material & Finished Goods stored neatly in distinct designated zones.",
  "Separate aseptic Dispensing Areas to maintain purity and chemical integrity.",
  "Full warehouse management & tracking powered by Microsoft Dynamics 360 ERP system.",
  "We operate our own reliable logistics fleet to deliver Finished Goods swiftly.",
  "Our operational customer pledge and motto: 'ON TIME DELIVER'"
];
