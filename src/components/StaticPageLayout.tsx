import { ReactNode } from "react"
import { SectionHeader } from "./SectionHeader"

interface StaticPageLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function StaticPageLayout({
  title,
  description,
  children,
}: StaticPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F7F7] py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-8">
          <SectionHeader title={title} description={description} />
        </header>
        <main className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}


