import { TaskForm } from '../../molecules/TaskForm';
import { FilterButtons } from '../../molecules/FilterButtons';
import { TaskItem } from '../../molecules/TaskItem';
import { TaskCounter } from '../../molecules/TaskCounter';
import { useTasks } from '../../../hooks/useTasks';
import styles from './TodoApp.module.css';

export const TodoApp: React.FC = () => {
  const {
    tasks,
    currentFilter,
    activeTaskCount,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    setCurrentFilter,
  } = useTasks();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Doリスト</h1>
      
      <TaskForm onAddTask={addTask} />
      
      <FilterButtons
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      
      <ul className={styles.taskList}>
        {tasks.length === 0 ? (
          <li className={styles.emptyMessage}>タスクがありません</li>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </ul>
      
      <TaskCounter
        activeCount={activeTaskCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};