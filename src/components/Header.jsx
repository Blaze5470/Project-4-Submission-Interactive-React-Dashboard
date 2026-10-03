function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-icon">RD</div>
          <div>
            <strong>React Dashboard</strong>
            <span>Interactive Student Workspace</span>
          </div>
        </div>
        <div className="status-badge">
          <span className="status-dot"></span>
          Dashboard Active
        </div>
      </div>
    </header>
  )
}

export default Header