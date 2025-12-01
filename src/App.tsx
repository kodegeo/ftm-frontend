import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { MyTaste } from "./pages/MyTaste"
import { MyHealth } from "./pages/MyHealth"
import { MealPlanning } from "./pages/MealPlanning"
import { NutritionServices } from "./pages/NutritionServices"
import { MyCommunity } from "./pages/MyCommunity"
import { AboutUs } from "./pages/AboutUs"
import { Contact } from "./pages/Contact"
import { HelpCenter } from "./pages/HelpCenter"
import { Career } from "./pages/Career"
import { Policy } from "./pages/Policy"
import { Official } from "./pages/Official"
import { Sitemap } from "./pages/Sitemap"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="my-taste" element={<MyTaste />} />
          <Route path="my-health" element={<MyHealth />} />
          <Route path="meal-planning" element={<MealPlanning />} />
          <Route path="nutrition-services" element={<NutritionServices />} />
          <Route path="my-community" element={<MyCommunity />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="career" element={<Career />} />
          <Route path="policy" element={<Policy />} />
          <Route path="official" element={<Official />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
