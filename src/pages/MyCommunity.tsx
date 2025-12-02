import { useRef } from "react"
import { CommunityHero } from "../components/community/CommunityHero"
import { FeatureCards } from "../components/community/FeatureCards"
import { EventsSection } from "../components/community/EventsSection"
import { FeedbackSection } from "../components/community/FeedbackSection"
//  import { ProgressUpdates } from "../components/community/ProgressUpdates"
import { HealthInitiatives } from "../components/community/HealthInitiatives"
import { NewsletterStrip } from "../components/community/NewsletterStrip"

export function MyCommunity() {
  const eventsRef = useRef<HTMLDivElement>(null)

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <CommunityHero onScrollToEvents={scrollToEvents} />
      <FeatureCards />
      <div ref={eventsRef}>
      <EventsSection />
      </div>
      <FeedbackSection />
      {/* <ProgressUpdates /> */}
      <HealthInitiatives />
      <NewsletterStrip />
    </div>
  )
}
