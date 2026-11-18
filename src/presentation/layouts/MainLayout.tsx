import type { ReactNode } from 'react'

interface MainLayoutProps {
  navbar: ReactNode
  footer: ReactNode
  children: ReactNode
}

/** Estructura semántica global: header / main / footer. */
export function MainLayout({ navbar, footer, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <header>{navbar}</header>
      <main>{children}</main>
      {footer}
    </div>
  )
}
