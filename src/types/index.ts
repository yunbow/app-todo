export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyPress?: (key: string) => void;
  className?: string;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export interface TaskCounterProps {
  activeCount: number;
  onClearCompleted: () => void;
}