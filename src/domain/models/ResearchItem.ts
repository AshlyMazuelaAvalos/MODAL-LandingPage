export type ResearchCategory = 'Producto' | 'Ingeniería' | 'UX'

export interface ResearchItem {
  id: string
  title: string
  summary: string
  category: ResearchCategory
  year: number
  icon: string
}
