import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { SearchBar } from "../components/SearchBar"
import { ProductCard } from "../components/store/ProductCard"

export function Store() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="Store"
        subtitle="Browse our curated selection of products"
        image="/images/store.png"
      />

      <div className="mb-8">
        <SearchBar placeholder="Search products..." />
      </div>

      <SectionHeader
        title="Featured Products"
        description="Discover our handpicked selection"
      />

      <CardGrid columns={4}>
        <ProductCard
          name="Organic Apples"
          price="$4.99/lb"
          description="Fresh, organic apples from local farms"
        />
        <ProductCard
          name="Whole Grain Bread"
          price="$3.49"
          description="Freshly baked whole grain bread"
        />
        <ProductCard
          name="Organic Spinach"
          price="$2.99"
          description="Fresh organic spinach"
        />
        <ProductCard
          name="Wild Caught Salmon"
          price="$12.99/lb"
          description="Sustainable wild-caught salmon"
        />
      </CardGrid>
    </div>
  )
}

