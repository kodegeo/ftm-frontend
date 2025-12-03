import { StaticPageLayout } from "../components/StaticPageLayout"

export function AboutUs() {
  return (
    <StaticPageLayout
      title="About Family Tree Food Market"
      description="A neighborhood market designed with and for the Hill District."
    >
      <div className="space-y-4 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          Family Tree Food Market is built on a simple idea: every household
          deserves easy access to fresh, familiar, and affordable food. We’re
          working alongside neighbors, churches, local growers, and community
          partners to create a store that feels like it truly belongs to the
          Hill District.
        </p>
        <p>
          From the products on our shelves to the services we offer, we listen
          first. Your stories, recipes, and everyday needs guide how we grow.
          This isn’t a one‑size‑fits‑all grocery store—it’s a community
          gathering place where food, culture, and connection come together.
        </p>
        <p>
          As we prepare to open our doors, we’ll continue sharing updates,
          asking for feedback, and inviting you into the process. Family Tree
          is more than a name—it’s our commitment to rooting this work in the
          people who call this neighborhood home.
        </p>
      </div>
    </StaticPageLayout>
  )
}



