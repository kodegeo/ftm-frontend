import { StaticPageLayout } from "../components/StaticPageLayout"

export function Policy() {
  return (
    <StaticPageLayout
      title="Store Policies"
      description="Simple, transparent policies that put our customers first."
    >
      <div className="space-y-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          We keep our policies clear and neighbor‑friendly so you always know
          what to expect when you shop with Family Tree. As the store opens,
          we’ll share full details here. For now, here are a few guiding
          commitments.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Fair pricing and clear labels on every shelf.</li>
          <li>Respectful, welcoming service for every customer.</li>
          <li>Easy returns when something doesn’t meet your needs.</li>
          <li>Honest communication about promotions and discounts.</li>
        </ul>

        <p>
          As we grow, we’ll update this page with more specifics about returns,
          payments, discounts, and community partnerships. If you ever have a
          question about a policy, our team is here to help.
        </p>
      </div>
    </StaticPageLayout>
  )
}


