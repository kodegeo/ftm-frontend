import { StaticPageLayout } from "../components/StaticPageLayout"

export function Contact() {
  return (
    <StaticPageLayout
      title="Contact Family Tree"
      description="We’d love to hear from you."
    >
      <div className="space-y-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          Have a question, idea, or partnership in mind? Reach out and our team
          will follow up as soon as we can. Your messages help us shape a store
          that truly serves the Hill District.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-green">General Inquiries</h3>
            <p>Email: info@familytreemarket.org</p>
            <p>Phone: (000) 000‑0000</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-green">Store Location</h3>
            <p>Family Tree Food Market</p>
            <p>123 Main Street</p>
            <p>Hill District, PA 00000</p>
          </div>
        </div>

        <p>
          Prefer to share feedback online? Use our community form to tell us
          what you’d like to see on the shelves, what’s working, and what we
          can do better.
        </p>
      </div>
    </StaticPageLayout>
  )
}


