function TaskItem({ task, onToggle, onDelete }) {
  return (
    <article className={task.completed ? 'task-item completed' : 'task-item'}>
      <button
        className="check-button"
        type="button"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? `Mark ${task.title} active` : `Complete ${task.title}`}
      >
        {task.completed ? '✓' : ''}
      </button>

      <div className="task-content">
        <h3>{task.title}</h3>
        <span className="category">{task.category}</span>
      </div>

      <span className={task.completed ? 'status complete' : 'status pending'}>
        {task.completed ? 'Completed' : 'Active'}
      </span>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </article>
  )
}

export default TaskItem