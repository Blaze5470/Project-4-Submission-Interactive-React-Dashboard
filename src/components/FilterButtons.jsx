function FilterButtons({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ]

  return (
    <div className="filter-section">
      <span>Filter:</span>
      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item.id}
            className={activeFilter === item.id ? 'filter-button active' : 'filter-button'}
            onClick={() => onFilterChange(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterButtons