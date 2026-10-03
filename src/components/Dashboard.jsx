import StatCard from './StatCard'

function Dashboard({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length
  const active = tasks.length - completed
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0

  return (
    <section className="stats-grid" aria-label="Dashboard statistics">
      <StatCard
        label="Total Tasks"
        value={tasks.length}
        detail="All tasks"
        icon="✓"
      />
      <StatCard
        label="Completed"
        value={completed}
        detail="Finished tasks"
        icon="★"
      />
      <StatCard
        label="Active"
        value={active}
        detail="Still to do"
        icon="→"
      />
      <StatCard
        label="Progress"
        value={`${progress}%`}
        detail="Completion rate"
        icon="↗"
      />
    </section>
  )
}

export default Dashboard