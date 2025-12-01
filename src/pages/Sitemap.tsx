import { StaticPageLayout } from "../components/StaticPageLayout"
import { Link } from "react-router-dom"

export function Sitemap() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Store", to: "/store" },
    { label: "MyTaste", to: "/my-taste" },
    { label: "MyHealth", to: "/my-health" },
    { label: "Meal Planning", to: "/meal-planning" },
    { label: "Nutrition Services", to: "/nutrition-services" },
    { label: "My Community", to: "/my-community" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact", to: "/contact" },
    { label: "Help Center", to: "/help-center" },
    { label: "Career", to: "/career" },
    { label: "Policy", to: "/policy" },
    { label: "Official", to: "/official" },
  ]

  return (
    <StaticPageLayout
      title="Site Map"
      description="A quick overview of the main pages on the Family Tree site."
    >
      <div className="space-y-4 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>
          Use this page to quickly find your way around the Family Tree website.
          As we add new features and pages, we’ll keep this list up to date.
        </p>
        <ul className="grid gap-2 md:grid-cols-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-brand-green hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StaticPageLayout>
  )
}


