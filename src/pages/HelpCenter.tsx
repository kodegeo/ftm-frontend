import { StaticPageLayout } from "../components/StaticPageLayout"

export function HelpCenter() {
  return (
    <StaticPageLayout
      title="Help Center"
      description="Quick answers to common questions about shopping with Family Tree."
    >
      <div className="space-y-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          We want shopping with Family Tree to feel easy and stress‑free. Below
          are simple answers to questions neighbors ask us most often.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-brand-green">
              When will the store open?
            </h3>
            <p>
              We’re working hard on construction and setup now. As soon as we
              have a confirmed opening date, we’ll share it on our website,
              social media, and through our community newsletter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-green">
              Will you offer online ordering or delivery?
            </h3>
            <p>
              Yes—our goal is to make it easy to get groceries by offering
              in‑store shopping, pickup, and delivery options. We’ll share more
              details as we get closer to launch.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-green">
              How can I share product requests?
            </h3>
            <p>
              Your voice matters. You can share requests through our community
              feedback form, at neighborhood meetings, or by talking with our
              team once the store opens.
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  )
}


