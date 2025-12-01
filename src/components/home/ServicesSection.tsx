import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function ServicesSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Green card with services */}
          <div className="bg-brand-green p-8 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              Fresh Choices for a Healthier You
            </h3>
            <ul className="space-y-3 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Delicious foods that support better eating</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Easy swaps that help you take small steps toward wellness</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Local produce and culturally familiar foods your family already loves</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-6 mt-8" style={{ fontFamily: 'Arial, sans-serif' }}>
              Your Goals, Our Support
            </h3>
            <ul className="space-y-3 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Simple ways to stay on track — right in your shopping cart</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Helpful tips to understand healthier options</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-6 mt-8" style={{ fontFamily: 'Arial, sans-serif' }}>
              Nutrition Help, Without the Complication
            </h3>
            <ul className="space-y-3 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Friendly guidance from dietitian partners</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Personalized suggestions based on what you enjoy</span>
              </li>
            </ul>

            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white mt-8"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <Link to="/my-community">We Want to Hear From You</Link>
            </Button>
          </div>

          {/* Right: Basket image */}
          <div className="rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
            <img 
              src="/images/produce-image-1.png" 
              alt="Fresh produce basket" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
