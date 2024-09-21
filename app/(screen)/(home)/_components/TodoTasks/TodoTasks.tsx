import { Checkbox } from "@/app/components/Checkbox/Checkbox";
import { Typography } from "@/app/components/Typography/Typography";
import { TrashIcon } from "@/app/icons/Trash";
import styles from "./todotasks.module.scss";
import { useState } from "react";
import { Modal } from "@/app/components/Modal/Modal";
import { DeleteTodo } from "./_components/DeleteTodo/DeleteTodo";
import { ITodoState, TaskStatus } from "../TodoList/TodoList";

const title = {
  PENDING: "Suas tarefas de hoje",
  COMPLETED: "Tarefas finalizadas",
};

interface ITodoTasksProps extends TaskStatus {
  todos: ITodoState[];
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (todoId: string, status: TaskStatus["status"]) => void;
}

export function TodoTasks(props: ITodoTasksProps) {
  const { status, todos, onDeleteTodo, onCompleteTodo } = props;
  const [deleteTaskIsOpen, setDeleteTaskAsOpen] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<string>("");

  const handleOpenDeleteTask = (todoId: string) => {
    setTodoId(todoId);
    setDeleteTaskAsOpen(true);
  };

  const handleCloseDeleteTask = () => setDeleteTaskAsOpen(false);

  const handleDeleteTask = () => {
    onDeleteTodo(todoId);
    handleCloseDeleteTask();
  };

  const handleCompleteTask = (todoId: string, status: TaskStatus["status"]) => {
    const newStatus = status === "PENDING" ? "COMPLETED" : "PENDING";
    onCompleteTodo(todoId, newStatus);
  };
  const taskIsCompleted =
    status === "PENDING"
      ? styles.todotasks_control__label
      : styles.todotasks_control__label__completed;

  return (
    <div className={styles.todotasks}>
      <Typography weight="regular" color="secondary">
        {title[status]}
      </Typography>

      {todos.map((todo) => (
        <div
          key={todo.description.concat(Math.random().toString())}
          className={styles.todotasks_control}
        >
          <label className={styles.todotasks_control__checkbox}>
            <Checkbox
              checked={todo.status === "COMPLETED"}
              onChange={() => handleCompleteTask(todo.id, todo.status)}
            />
            <span className={taskIsCompleted}>
              {todo.description}
            </span>
          </label>
          <button
            className={styles.todotasks_control__icon}
            onClick={() => handleOpenDeleteTask(todo.id)}
          >
            <TrashIcon />
          </button>
        </div>
      ))}
      <Modal isOpen={deleteTaskIsOpen}>
        <DeleteTodo
          onClose={handleCloseDeleteTask}
          onDeleteTodo={handleDeleteTask}
        />
      </Modal>
    </div>
  );
}
