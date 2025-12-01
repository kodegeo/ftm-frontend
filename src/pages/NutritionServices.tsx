import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { AppointmentScheduler } from "../components/nutrition-services/AppointmentScheduler"
import { DietitianProfileCard } from "../components/nutrition-services/DietitianProfileCard"
import { AskADietitianForm } from "../components/nutrition-services/AskADietitianForm"

export function NutritionServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="Nutrition Services"
        subtitle="Connect with dietitians and get personalized nutrition guidance"
      />

      <SectionHeader
        title="Our Dietitians"
        description="Meet our team of certified nutrition professionals"
      />

      <CardGrid columns={3}>
        <DietitianProfileCard
          name="Dr. Sarah Johnson"
          credentials="RD, CDN"
          specialties={["Diabetes Management", "Weight Management"]}
        />
        <DietitianProfileCard
          name="Dr. Michael Chen"
          credentials="RD, MS"
          specialties={["Heart Health", "Sports Nutrition"]}
        />
        <DietitianProfileCard
          name="Dr. Emily Rodriguez"
          credentials="RD, LD"
          specialties={["Pediatric Nutrition", "Food Allergies"]}
        />
      </CardGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <AppointmentScheduler />
        <AskADietitianForm />
      </div>
    </div>
  )
}

