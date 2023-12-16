interface Feature {
  available: boolean;
  quantity?: string;
}

export interface KeyFeature {
  name: string;
  free: Feature;
  pro: Feature;
}

const keyFeatures: KeyFeature[] = [
  {
    name: "Number of projects",
    free: { available: true, quantity: "15" },
    pro: { available: true, quantity: "100" },
  },
  {
    name: "Pre-made templates",
    free: { available: true },
    pro: { available: true },
  },
  {
    name: "Custom templates",
    free: { available: true },
    pro: { available: true },
  },
  {
    name: "Integrations",
    free: { available: true },
    pro: { available: true },
  },
];

export default keyFeatures;
