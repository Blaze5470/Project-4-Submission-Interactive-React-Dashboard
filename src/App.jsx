import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'
import './App.css'

const starterTasks = [
  { id: 1, title: 'Finish React Project 4', category: 'School', completed: false },
  { id: 2, title: 'Review JavaScript notes', category: 'School', completed: true },
  { id: 3, title: 'Update GitHub repository', category: 'Career', completed: false },
  { id: 4, title: 'Practice CSS Grid and Flexbox', category: 'School', completed: false },
  { id: 5, title: 'Work on portfolio website', category: 'Career', completed: true },
  { id: 6, title: 'Study for upcoming quiz', category: 'School', completed: false }
]

function App() {
  const [tasks, setTasks] = useState(starterTasks)
  const [filter, setFilter] = useState('all')
  const [searchText, setSearchText] = useState('')
  const [newTask, setNewTask] = useState('')

  const addTask = (event) => {
    event.preventDefault()

    const title = newTask.trim()
    if (!title) return

    const task = {
      id: Date.now(),
      title,
      category: 'School',
      completed: false
    }

    setTasks((currentTasks) => [task, ...currentTasks])
    setNewTask('')
  }

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  const resetTasks = () => {
    setTasks(starterTasks)
    setFilter('all')
    setSearchText('')
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && !task.completed) ||
      (filter === 'completed' && task.completed)

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">PROJECT 4</p>
            <h1>Student Productivity Dashboard</h1>
            <p className="subtitle">
              Manage your school and career tasks with an interactive React dashboard.
            </p>
          </div>

          <button className="reset-button" onClick={resetTasks}>
            Reset Dashboard
          </button>
        </section>

        <Dashboard tasks={tasks} />

        <section className="task-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">TASK MANAGER</p>
              <h2>Your Tasks</h2>
            </div>
            <span className="task-count">
              {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          <form className="task-form" onSubmit={addTask}>
            <label htmlFor="new-task">Add a new task</label>
            <div className="input-row">
              <input
                id="new-task"
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                placeholder="Enter a school or career task..."
                maxLength="80"
              />
              <button type="submit">Add Task</button>
            </div>
          </form>

          <div className="search-row">
            <label htmlFor="search">Search tasks</label>
            <input
              id="search"
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search by task name..."
            />
          </div>

          <FilterButtons activeFilter={filter} onFilterChange={setFilter} />

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>

      <footer>
        <p>Project 4 • Interactive React Dashboard • Built with React and Vite</p>
      </footer>
    </div>
  )
}

export default App