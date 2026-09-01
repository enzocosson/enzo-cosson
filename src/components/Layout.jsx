import Header from './Header'
import './Layout.css'

export default function Layout({ children, sidebar, sidebarPosition = 'right' }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        {sidebar && sidebarPosition === 'left' && (
          <aside className="layout__sidebar layout__sidebar--left">{sidebar}</aside>
        )}
        <div className="layout__content">{children}</div>
        {sidebar && sidebarPosition === 'right' && (
          <aside className="layout__sidebar layout__sidebar--right">{sidebar}</aside>
        )}
      </main>
    </div>
  )
}
