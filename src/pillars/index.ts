// Pillar definitions and utilities
// This will contain pillar-specific logic and configurations

export type PillarId =
  | "store"
  | "mytaste"
  | "myhealth"
  | "meal-planning"
  | "nutrition-services"
  | "mycommunity"

export interface PillarConfig {
  id: PillarId
  name: string
  description: string
  path: string
}

export const pillars: PillarConfig[] = [
  {
    id: "store",
    name: "Store",
    description: "Shopping, product information, store-specific details",
    path: "/store",
  },
  {
    id: "mytaste",
    name: "MyTaste",
    description: "Taste preference intelligence",
    path: "/my-taste",
  },
  {
    id: "myhealth",
    name: "MyHealth",
    description: "Ingredient intelligence and health insights",
    path: "/my-health",
  },
  {
    id: "meal-planning",
    name: "Meal Planning",
    description: "Recipes, meal plans, and grocery integration",
    path: "/meal-planning",
  },
  {
    id: "nutrition-services",
    name: "Nutrition Services",
    description: "Appointments, guidance, dietitian support, educational tools",
    path: "/nutrition-services",
  },
  {
    id: "mycommunity",
    name: "MyCommunity",
    description: "Community engagement, events, surveys",
    path: "/my-community",
  },
]

