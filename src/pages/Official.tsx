import { StaticPageLayout } from "../components/StaticPageLayout"

export function Official() {
  return (
    <StaticPageLayout
      title="Official Information"
      description="Key details about Family Tree Food Market as an organization."
    >
      <div className="space-y-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          Family Tree Food Market is a community‑driven project focused on
          expanding access to fresh, culturally familiar foods in the Hill
          District. This page will house official statements, press resources,
          and organizational updates.
        </p>
        <p>
          As we move from planning to opening, we’ll share more information
          about our partners, governance, and ways for local residents to stay
          involved in decision‑making.
        </p>
        <p>
          For media or formal inquiries, please use the contact information on
          our Contact page and include “Media/Official Request” in your
          message.
        </p>
      </div>
    </StaticPageLayout>
  )
}


