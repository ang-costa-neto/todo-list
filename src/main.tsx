import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TasksProvider from './providers/TasksProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <TasksProvider>
    <App />
  </TasksProvider>,
)
