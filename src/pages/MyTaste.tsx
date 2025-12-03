import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { TasteProfileChart } from "../components/mytaste/TasteProfileChart"
import { PreferenceForm } from "../components/mytaste/PreferenceForm"
import { TasteMatchCard } from "../components/mytaste/TasteMatchCard"

export function MyTaste() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="MyTaste"
        subtitle="Discover your taste preferences and find products that match your palate"
        image="/images/mytaste.png"
      />

      <SectionHeader
        title="Your Taste Profile"
        description="Based on your preferences and purchase history"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <TasteProfileChart
          profile={{
            sweet: 75,
            salty: 60,
            sour: 40,
            bitter: 30,
            umami: 55,
          }}
        />
        <PreferenceForm />
      </div>

      <SectionHeader
        title="Recommended for You"
        description="Products that match your taste profile"
      />

      <CardGrid columns={3}>
        <TasteMatchCard
          productName="Dark Chocolate"
          matchScore={92}
          reason="High match for your sweet preference"
        />
        <TasteMatchCard
          productName="Sea Salt Chips"
          matchScore={88}
          reason="Matches your salty preference"
        />
        <TasteMatchCard
          productName="Citrus Fruits"
          matchScore={75}
          reason="Good match for your sour preference"
        />
      </CardGrid>
    </div>
  )
}


