import {
  Tabs as UITabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./ui/tabs"

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  items: Array<{
    value: string
    label: string
    content: React.ReactNode
  }>
}

export function Tabs({ defaultValue, value, onValueChange, items }: TabsProps) {
  return (
    <UITabs defaultValue={defaultValue} value={value} onValueChange={onValueChange}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </UITabs>
  )
}

