import { StaticPageLayout } from "../components/StaticPageLayout"

export function Career() {
  return (
    <StaticPageLayout
      title="Careers at Family Tree"
      description="Join a team rooted in community, culture, and good food."
    >
      <div className="space-y-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          Working at Family Tree means more than a job—it’s a chance to be part
          of a neighborhood‑led grocery store that puts people first. Our team
          will reflect the community we serve and celebrate the talents of our
          neighbors.
        </p>
        <p>
          We’ll be hiring for roles across the store, including customer
          service, prepared foods, stocking, outreach, and more. As positions
          become available, we’ll post them here and share them with local
          partners in the Hill District.
        </p>
        <p>
          If you’re interested in future opportunities, keep an eye on this
          page or join our newsletter so you’re the first to know when we begin
          hiring.
        </p>
      </div>
    </StaticPageLayout>
  )
}



