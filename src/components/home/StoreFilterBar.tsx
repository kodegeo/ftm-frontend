import { useState } from "react"
import { Input } from "../ui/input"
import { Search } from "lucide-react"

type FulfillmentType = "PICKUP" | "DELIVERY" | "IN-STORE"

export function StoreFilterBar() {
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>("PICKUP")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")

  return (
    <section className="bg-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
          Select Store
        </h2>
        
        {/* Search inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="pl-10"
              style={{ fontFamily: 'Arial, sans-serif' }}
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="pl-10"
              style={{ fontFamily: 'Arial, sans-serif' }}
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="pl-10"
              style={{ fontFamily: 'Arial, sans-serif' }}
            />
          </div>
        </div>

        {/* Fulfillment options */}
        <div className="flex flex-wrap gap-4">
          {(["PICKUP", "DELIVERY", "IN-STORE"] as FulfillmentType[]).map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="fulfillment"
                value={type}
                checked={fulfillmentType === type}
                onChange={() => setFulfillmentType(type)}
                className="w-4 h-4 text-brand-green"
              />
              <span className="font-semibold text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
                {type}
              </span>
              <span className="text-sm text-gray-500" style={{ fontFamily: 'Arial, sans-serif' }}>
                {type === "PICKUP" && "Order online, pick up at store"}
                {type === "DELIVERY" && "Get it delivered to your door"}
                {type === "IN-STORE" && "Shop in person"}
              </span>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}

