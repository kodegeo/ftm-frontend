// Store configuration and utilities
// This will contain store-specific logic and configurations

export interface StoreConfig {
  name: string
  slug: string
  status: "coming-soon" | "soft-launch" | "full-launch"
  features: {
    ecommerce: boolean
    mealPlanning: boolean
    nutritionServices: boolean
    tasteIntelligence: boolean
    healthIntelligence: boolean
  }
}

export const stores: StoreConfig[] = [
  {
    name: "Hill District",
    slug: "hill-district",
    status: "full-launch",
    features: {
      ecommerce: false,
      mealPlanning: true,
      nutritionServices: true,
      tasteIntelligence: true,
      healthIntelligence: true,
    },
  },
  {
    name: "Montbello",
    slug: "montbello",
    status: "soft-launch",
    features: {
      ecommerce: false,
      mealPlanning: true,
      nutritionServices: false,
      tasteIntelligence: true,
      healthIntelligence: true,
    },
  },
]

