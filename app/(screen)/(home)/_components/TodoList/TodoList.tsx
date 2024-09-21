"use client";

import { Button } from "@/app/components/Button/Button";
import { TodoTasks } from "../TodoTasks/TodoTasks";
import styles from "./todolist.module.scss";
import { useState } from "react";
import { Modal } from "@/app/components/Modal/Modal";
import { CreateTodo } from "../CreateTodo/CreateTodo";

export type TaskStatus = {
  status: "PENDING" | "COMPLETED";
};

export interface ITodoState extends TaskStatus {
  description: string;
  id: string;
}

export function TodoList() {
  const [newTaskIsOpen, setNewTaskAsOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<Array<ITodoState>>([]);

  const handleNewTask = () => setNewTaskAsOpen(true);
  const handleCloseNewTask = () => setNewTaskAsOpen(false);

  const handleAddTodo = (description: string) =>
    setTodos((state) => [
      ...state,
      { description, id: Math.random().toString(), status: "PENDING" },
    ]);

  const handleDeleteTodo = (todoId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const handleCompleteTodo = (todoId: string, status: TaskStatus["status"]) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  const pendingTodos = todos.filter((todo) => todo.status === "PENDING");
  const completedTodos = todos.filter((todo) => todo.status === "COMPLETED");

  return (
    <div className={styles.todolist}>
      <TodoTasks
        status="PENDING"
        todos={pendingTodos}
        onDeleteTodo={handleDeleteTodo}
        onCompleteTodo={handleCompleteTodo}
      />
      <TodoTasks
        status="COMPLETED"
        todos={completedTodos}
        onDeleteTodo={handleDeleteTodo}
        onCompleteTodo={handleCompleteTodo}
      />
      <Button onClick={handleNewTask}>Adicionar nova tarefa</Button>
      <Modal isOpen={newTaskIsOpen}>
        <CreateTodo onClose={handleCloseNewTask} onAddTodo={handleAddTodo} />
      </Modal>
    </div>
  );
}
